from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', active_page='home')

@app.route('/send_message', methods=['POST'])
def send_message():
    name = request.form.get('name', '')
    email = request.form.get('email', '')
    phone = request.form.get('phone', '')
    service = request.form.get('service', '')
    message = request.form.get('message', '')
    # TODO: Integrate SMTP email sending here
    return redirect(url_for('home', _anchor='contact'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)
