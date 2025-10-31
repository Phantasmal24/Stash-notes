class Student:
    def __init__(self, name, student_id, initial_gpa):
        self.name = name
        self.student_id = student_id
        self.__gpa = initial_gpa

    def get_gpa(self):
        print(f"GPA: {self.__gpa}")
        return self.__gpa
    def set_gpa(self, new_gpa):
        if 0.0 <= new_gpa <= 4.0:
            self.__gpa = new_gpa
            print("Success: GPA Updated.")
        else:
            print("Error: Invalid GPA. Must be between 0.0 and 4.0.")

# Example Usage
# Create a new student
s1 = Student("Aditya", "S123", 3.8)

# --- Test the getter ---
# This should print "Current GPA: 3.8"
s1.get_gpa()

# --- Test the setter (Good input) ---
# This should print "Success: GPA updated to 3.9"
s1.set_gpa(3.9)

# --- Test the setter (Bad input) ---
# This should print "Error: Invalid GPA. Must be between 0.0 and 4.0"
s1.set_gpa(5.0)

# --- Test the setter (Bad input) ---
# This should print "Error: Invalid GPA. Must be between 0.0 and 4.0"
s1.set_gpa(-0.5)

# --- Final check ---
# This should show that the GPA is still 3.9, because the bad inputs failed
# It should print "Current GPA: 3.9"
s1.get_gpa()

# --- Try to cheat (This should fail) ---
try:
    s1.__gpa = 10.0 # Try to set the private attribute directly
    print("Cheating successful... (this is bad)")
except AttributeError as e:
    print(f"\nCheating failed! Error: {e}")

# The GPA should still be 3.9
s1.get_gpa()
print("\n--Script End--\n")


