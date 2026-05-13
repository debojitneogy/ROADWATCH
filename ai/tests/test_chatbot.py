"""
DriveLegal AI — Accuracy Test Runner
Team: Project Firefly | CoERS x RBG Labs x IIT Madras 2026
Author: Archisman Karmakar (AI/ML Engineer)
Test Cases: Shirsa Mondal (Research)
"""

from ai.chatbot import ask_llm
import time

# ─────────────────────────────────────────────
# TEST CASES
# Each case: (query, state, expected_violation_id, expected_fine_amount, description)
# expected_fine_amount = None means no fine data expected (low confidence case)
# ─────────────────────────────────────────────

TEST_CASES = [
    # ── HELMET (no_helmet) ──
    ("What is the fine for riding without a helmet in West Bengal?",     "WB", "no_helmet",           1000,  "Helmet - WB"),
    ("Helmet fine in Maharashtra?",                                       "MH", "no_helmet",           1000,  "Helmet - MH"),
    ("No helmet challan in Delhi?",                                       "DL", "no_helmet",           1000,  "Helmet - DL"),

    # ── SEATBELT (no_seatbelt) ──
    ("Fine for not wearing seatbelt in West Bengal?",                    "WB", "no_seatbelt",         1000,  "Seatbelt - WB"),
    ("Seat belt violation fine in Maharashtra?",                          "MH", "no_seatbelt",         1000,  "Seatbelt - MH"),
    ("What happens if I don't wear seatbelt in Delhi?",                  "DL", "no_seatbelt",         1000,  "Seatbelt - DL"),

    # ── OVERSPEEDING (overspeeding) ──
    ("Overspeeding fine in West Bengal?",                                "WB", "overspeeding",        1000,  "Overspeeding - WB"),
    ("What is the penalty for speeding in Maharashtra?",                 "MH", "overspeeding",        1000,  "Overspeeding - MH"),
    ("What is the penalty for overspeeding in Delhi?",                   "DL", "overspeeding",        1000,  "Overspeeding - DL"),

    # ── DRUNK DRIVING (drunk_driving) ──
    ("Drunk driving fine in Maharashtra for first time?",                "MH", "drunk_driving",       10000, "Drunk Driving - MH"),
    ("DUI challan in Delhi?",                                            "DL", "drunk_driving",       10000, "Drunk Driving - DL"),
    ("Drink and drive fine in West Bengal?",                             "WB", "drunk_driving",       None,  "Drunk Driving - WB (no data)"),

    # ── NO LICENCE (no_license) ──
    ("Fine for driving without licence in West Bengal?",                 "WB", "no_license",          5000,  "No Licence - WB"),
    ("What is the challan for no DL in Maharashtra?",                   "MH", "no_license",          5000,  "No Licence - MH"),
    ("Driving without licence fine in Delhi?",                           "DL", "no_license",          5000,  "No Licence - DL"),

    # ── MOBILE PHONE (mobile_phone) ──
    ("Fine for using mobile phone while driving in Maharashtra?",        "MH", "mobile_phone",        5000,  "Mobile Phone - MH"),
    ("Phone while driving challan in Delhi?",                            "DL", "mobile_phone",        5000,  "Mobile Phone - DL"),
    ("Mobile phone fine in West Bengal?",                                "WB", "mobile_phone",        None,  "Mobile Phone - WB (no data)"),

    # ── DANGEROUS DRIVING (dangerous_driving) ──
    ("Rash driving fine in West Bengal?",                                "WB", "dangerous_driving",   5000,  "Dangerous Driving - WB"),
    ("Dangerous driving challan in Maharashtra?",                        "MH", "dangerous_driving",   5000,  "Dangerous Driving - MH"),

    # ── NO REGISTRATION (no_registration) ──
    ("Fine for driving without registration in West Bengal?",            "WB", "no_registration",     5000,  "No Registration - WB"),
    ("Unregistered vehicle fine in Maharashtra?",                        "MH", "no_registration",     2000,  "No Registration - MH"),

    # ── NO PERMIT (no_permit) ──
    ("Fine for vehicle without permit in Delhi?",                        "DL", "no_permit",           10000, "No Permit - DL"),

    # ── DRIVING DISQUALIFIED (driving_disqualified) ──
    ("Penalty for driving while disqualified in Delhi?",                 "DL", "driving_disqualified",10000, "Driving Disqualified - DL"),

    # ── UNKNOWN / OUT OF SCOPE ──
    ("What is the fine for jumping a red light in Maharashtra?",         "MH", None,                  None,  "Red Light - MH (out of scope)"),
]

# ─────────────────────────────────────────────
# RUNNER
# ─────────────────────────────────────────────

def run_tests():
    print("=" * 70)
    print("  DRIVELEGAL AI — ACCURACY TEST REPORT")
    print("  Project Firefly | CoERS x RBG Labs x IIT Madras 2026")
    print("=" * 70)

    total        = len(TEST_CASES)
    passed       = 0
    failed       = 0
    errors       = 0
    failed_cases = []

    for i, (query, state, exp_violation, exp_fine, desc) in enumerate(TEST_CASES, 1):
        print(f"\n[{i:02d}/{total}] {desc}")
        print(f"  Q [{state}]: {query}")

        try:
            result = ask_llm(query, state)
            got_violation = result.get("violation_id")
            got_fine      = result.get("fine_amount")
            answer        = result.get("answer", "")

            violation_ok = (got_violation == exp_violation)
            fine_ok      = (got_fine == exp_fine)
            pass_case    = violation_ok and fine_ok

            status = "✅ PASS" if pass_case else "❌ FAIL"
            print(f"  A: {answer}")
            print(f"  Violation : expected={exp_violation!r:25} got={got_violation!r}")
            print(f"  Fine      : expected={str(exp_fine):10} got={str(got_fine)}")
            print(f"  Result    : {status}")

            if pass_case:
                passed += 1
            else:
                failed += 1
                failed_cases.append({
                    "case": desc,
                    "query": query,
                    "state": state,
                    "exp_violation": exp_violation,
                    "got_violation": got_violation,
                    "exp_fine": exp_fine,
                    "got_fine": got_fine,
                })

        except Exception as e:
            errors += 1
            print(f"  ⚠️  ERROR: {e}")
            failed_cases.append({
                "case": desc,
                "query": query,
                "state": state,
                "error": str(e),
            })

        time.sleep(0.5)  # avoid rate limiting

    # ── SUMMARY ──
    accuracy = (passed / total) * 100
    print("\n" + "=" * 70)
    print("  SUMMARY")
    print("=" * 70)
    print(f"  Total tests : {total}")
    print(f"  Passed      : {passed}  ✅")
    print(f"  Failed      : {failed}  ❌")
    print(f"  Errors      : {errors}  ⚠️")
    print(f"  Accuracy    : {accuracy:.1f}%")
    print("=" * 70)

    if failed_cases:
        print("\n  FAILED CASES:")
        for fc in failed_cases:
            print(f"\n  • {fc['case']}")
            if "error" in fc:
                print(f"    Error: {fc['error']}")
            else:
                print(f"    Expected violation={fc['exp_violation']!r}, got={fc['got_violation']!r}")
                print(f"    Expected fine={fc['exp_fine']}, got={fc['got_fine']}")

    print("\n" + "=" * 70)
    print(f"  Final Accuracy: {accuracy:.1f}% ({passed}/{total} passed)")
    print("=" * 70)

    return accuracy


if __name__ == "__main__":
    run_tests()