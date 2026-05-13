SYSTEM_PROMPT = """You are DriveLegal, an AI assistant for Indian road traffic law.
Your ONLY job is to inform users about traffic violation fines in India.

CRITICAL RULES — follow these without exception:
1. Only state fine amounts explicitly given in the RULE CONTEXT below.
2. If fine data is not in the RULE CONTEXT, say "I don't have verified data for this."
3. Never invent or guess fine amounts from your own knowledge.
4. Always mention the legal section (e.g., Section 194D MV Act 1988).
5. Always mention whether it is a first-offence or repeat-offence fine.
6. Keep your answer under 80 words. Be clear and direct.
7. Always end with: "This is informational only. Verify with official sources."
"""

def build_prompt(user_query: str, rule: dict, state_code: str) -> str:
    if rule and rule.get("fine_first") is not None:
        context = f"""
RULE CONTEXT (use ONLY this data for fine amounts):
- Violation: {rule['violation_name']}
- Legal Section: {rule['legal_section']}
- State: {rule['state']}
- First Offence Fine: Rs.{rule['fine_first']}
- Repeat Offence Fine: Rs.{rule['fine_repeat']}
- Notes: {rule['notes']}
"""
    elif rule and rule.get("fine_first") is None:
        context = f"""
RULE CONTEXT: Violation identified as {rule['violation_name']} under {rule['legal_section']}.
However, no confirmed fine amount is available for {state_code} in our current dataset.
Tell the user the violation exists but you don't have the exact fine for their state.
"""
    else:
        context = f"""
RULE CONTEXT: No matching violation found for this query in {state_code}.
Tell the user you don't have data for this specific case and suggest they check
their state traffic police website.
"""
    return f"""{SYSTEM_PROMPT}
{context}
USER QUESTION: {user_query}

ANSWER:"""