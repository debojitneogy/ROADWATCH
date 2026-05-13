import json
import os

_RULES_PATH = os.path.join(os.path.dirname(__file__), "../data/rules.json")

with open(_RULES_PATH, "r") as f:
    _RULES_DATA = json.load(f)

def find_rule(violation_id: str, state_code: str, vehicle_type: str = None) -> dict:
    for v in _RULES_DATA.get("violations", []):
        if v["violation_id"] == violation_id:
            state_data = v["states"].get(state_code.upper())
            if not state_data:
                return None
            vt = vehicle_type or "all"
            fines = state_data.get(vt) or state_data.get("all") or state_data.get("two_wheeler") or {}
            return {
                "violation_name": v["violation_name"],
                "legal_section": v["legal_section"],
                "state": state_code.upper(),
                "fine_first": fines.get("first"),
                "fine_repeat": fines.get("repeat"),
                "notes": state_data.get("notes", "")
            }
    return None

def extract_violation_from_query(query: str) -> str:
    query_lower = query.lower()
    keyword_map = {
        "no_helmet": ["helmet", "no helmet", "without helmet", "headgear"],
        "no_seatbelt": ["seatbelt", "seat belt", "without seatbelt"],
        "overspeeding": ["speed", "overspeed", "speeding", "fast driving"],
        "drunk_driving": ["drunk", "dui", "drink and drive", "alcohol", "drinking"],
        "no_license": ["license", "licence", "without licence", "no dl", "without dl", "no license"],
        "mobile_phone": ["phone", "mobile", "calling while driving", "using phone"],
        "dangerous_driving": ["dangerous", "rash driving", "reckless"],
        "no_registration": ["registration", "without registration", "no rc", "unregistered"],
        "no_permit": ["permit", "without permit", "no permit"],
        "driving_disqualified": ["disqualified", "banned from driving"],
    }
    for vid, keywords in keyword_map.items():
        if any(kw in query_lower for kw in keywords):
            return vid
    return None