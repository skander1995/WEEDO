import time
#import schedule
import requests
import os
print(os.environ)

def telegram_bot_sendtext(bot_message):
    
    send_text = os.environ.get('BASE_API')+'/api/weedo/'+bot_message

    response = requests.get(send_text)

    return response.json()


def report():
    my_balance = 10   ## Replace this number with an API call to fetch your account balance
    my_message = "Current balance is: {}".format(my_balance)   ## Customize your message
    telegram_bot_sendtext(my_message)


    
#schedule.every().day.at("12:00").do(report)

while True:
    #schedule.run_pending()
    telegram_bot_sendtext("Hello from python")
    time.sleep(1)