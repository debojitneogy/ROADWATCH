from pathlib import Path
import csv

def get_states():

    base_dir = Path(__file__).resolve().parent
    file_path = base_dir / "rules" / "state.txt"

    with open(file_path, "r", encoding="utf-8") as file:
        return [
            line.strip()
            for line in file
            if line.strip()
        ]


def get_vehicle_types():

    base_dir = Path(__file__).resolve().parent
    file_path = base_dir / "rules" / "vehicle_type.txt"

    with open(file_path, "r", encoding="utf-8") as file:
        return [
            line.strip()
            for line in file
            if line.strip()
        ]


def get_violations():

    base_dir = Path(__file__).resolve().parent
    file_path = base_dir / "rules" / "violation.txt"

    with open(file_path, "r", encoding="utf-8") as file:
        return [
            line.strip()
            for line in file
            if line.strip()
        ]

def calculate_fine(
    state,
    vehicle_type,
    violation,
    first_offence=True
):
    base_dir = Path(__file__).resolve().parent
    csv_path = base_dir / "rules" / "india.csv"

    # Normalize inputs to lowercase for case-insensitive comparison
    state = state.strip().lower()
    vehicle_type = vehicle_type.strip().lower()
    violation = violation.strip().lower()

    try:
        with open(csv_path, mode="r", encoding="utf-8") as file:
            reader = csv.DictReader(file)

            for row in reader:
                # Normalize CSV values (camelCase headers → lowercase) before comparing
                if (
                    row["state_code"].strip().lower() == state
                    and row["vehicle_type"].strip().lower() == vehicle_type
                    and row["violation"].strip().lower() == violation
                ):
                    fine_key = "first_offence_fine" if first_offence else "repeat_offence_fine"
                    return int(row[fine_key])

    except FileNotFoundError:
        raise FileNotFoundError(f"Rules file not found at: {csv_path}")
    except KeyError as e:
        raise KeyError(f"Expected column missing in CSV: {e}")
    except ValueError as e:
        raise ValueError(f"Invalid fine amount in CSV (expected integer): {e}")

    return 0  # No matching rule found

print(calculate_fine("WB","Bike","No Helmet",False))