import re

def validate_response(response: str, rule: dict) -> str:
    if not rule:
        return response
    
    mentioned_amounts = re.findall(r'Rs\.?\s*(\d[\d,]*)', response)
    mentioned_amounts = [int(a.replace(",", "")) for a in mentioned_amounts]
    
    known_amounts = [
        a for a in [rule.get("fine_first"), rule.get("fine_repeat")]
        if a is not None
    ]
    
    hallucinated = [a for a in mentioned_amounts if a not in known_amounts]
    
    if hallucinated:
        response += ("\n\n⚠️ Note: Only verified fine amounts from official "
                    "rules are shown. Always verify with your state's "
                    "transport authority.")
    
    return response