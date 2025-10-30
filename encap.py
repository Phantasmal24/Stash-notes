# 3. create a flight ticket class that:
#     has pricate variables __base_price and __tax_percent
#     calculated total ticket price as base_price + (base_price *tax / 100)
# allows updating tax but limits it between 0 - 20 % only
# the ticker price should never be accessed or modifier directly

class FlightTicker:
    def __init__(self, bse_price, tax_percent):
        self.__base_price  = bse_price
        # self.__tax_percent = tax_percent
        if 0<=tax_percent<=20:
            self.__tax_percent = tax_percent
        else:
            print("Enter valid tax percent(between 0 to 20 percent)")
        self.total_ticket = self.__base_price + (self.__base_price * (self.__tax_percent/100))
    def update_tax(self, tax):
        if 0<=tax<=20:
            self.__tax_percent = tax
            self.total_ticket = self.__base_price + (self.__base_price * (self.__tax_percent/100))
        else:
            print("Enter valid tax percent(between 0 to 20 percent)") 
    def display(self):
        print(f"tax % : {self.__tax_percent} \ntotal ticket price : Rs{self.total_ticket}")

f1 = FlightTicker(10000,13)
f1.display()
f1.update_tax(20)
f1.display()
