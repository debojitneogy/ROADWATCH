from ai.chatbot import ask_llm

test_queries = [
    ("What is the fine for riding without a helmet in West Bengal?", "WB"),
    ("I jumped a red light in Mumbai, what is my challan?", "MH"),
    ("Drunk driving fine in Delhi for first time?", "DL"),
    ("How much fine for using mobile phone while driving in Maharashtra?", "MH"),
    ("Fine for driving without licence in West Bengal?", "WB"),
    ("What is the penalty for overspeeding in Delhi?", "DL"),
]

print("="*60)
print("DRIVELEGAL CHATBOT — TEST RUN")
print("="*60)

for query, state in test_queries:
    print(f"\nQ [{state}]: {query}")
    result = ask_llm(query, state)
    print(f"A: {result['answer']}")
    print(f"   Violation: {result['violation_id']} | Fine: Rs.{result['fine_amount']} | Confidence: {result['confidence']}")
    print("-"*60)