from gemini_client import call_gemini
from rule_lookup import find_rule, extract_violation_from_query
from prompt_builder import build_prompt
from hallucination_guard import validate_response

def ask_llm(
    user_query: str,
    state_code: str,
    violation_id: str = None,
    vehicle_type: str = None
) -> dict:
    
    # Step 1: Extract violation if not provided
    detected_violation = violation_id or extract_violation_from_query(user_query)
    
    # Step 2: Lookup rule from rules.json
    rule = None
    if detected_violation:
        rule = find_rule(detected_violation, state_code, vehicle_type)
    
    # Step 3: Build RAG prompt
    prompt = build_prompt(user_query, rule, state_code)
    
    # Step 4: Call Gemini
    raw_answer = call_gemini(prompt)
    
    # Step 5: Validate
    validated_answer = validate_response(raw_answer, rule)
    
    # Step 6: Return
    return {
        "answer": validated_answer,
        "violation_id": detected_violation,
        "fine_amount": rule["fine_first"] if rule else None,
        "confidence": "high" if rule else "low"
    }