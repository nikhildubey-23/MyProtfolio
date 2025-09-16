from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'sparksolutionfreelancing@gmail.com'
app.config['MAIL_PASSWORD'] = 'ghuh rtyi vjzc chdd '

mail = Mail(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/send_contact', methods=['POST'])
def send_contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    msg = Message('New Contact Form Submission',
                  sender='sparksolutionfreelancing@gmail.com',
                  recipients=['sparksolutionfreelancing@gmail.com'])
    msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

    try:
        mail.send(msg)
        return render_template('success.html')
    except Exception as e:
        return f'Error sending message: {str(e)}'

if __name__ == '__main__':
    app.run(debug=True)
