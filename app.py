from crypt import methods
from flask import Flask, jsonify, redirect, render_template, url_for,request
from translator import translate

app = Flask(__name__)

@app.route("/")
def translator():
    return render_template("index.html")

@app.route("/process_data", methods=["GET", "POST"])
def process_data():
    if(request.method == "POST"):
        data = request.get_json()
        

        res = {"testo":translate(data[0]["testo"], data[1]["src"], data[2]["dest"])}
        return jsonify(res)
    

    return redirect(url_for('translator'))

if __name__ == "__main__":
    app.run(port=80,debug=True,host='0.0.0.0')

