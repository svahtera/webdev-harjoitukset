from flask import Flask, request

app = Flask(__name__)
@app.route('/sum')
def calculate_sum():
    args = request.args
    number1 = float(args.get("number1"))
    number2 = float(args.get("number2"))
    number3 = float(args.get("number3"))
    total_sum = number1+number2+number3

    response = {
        "number1": number1,
        "number2": number2,
        "number3": number3,
    }

    return response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)