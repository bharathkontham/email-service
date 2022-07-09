# Email Service

## Dependencies

* Redis

## Description

* Used BullMQ as a messaging queue for processing email.
* nodemailer is used to send SMTP emails.
* NestJS framework is used for developing this service.

## configuration

* create .env file based on .env.sample sample file in root directory
* configure SMTP and redis configurations here

## Flow and Architecture

* TBD

## APIs

* POST http://localhost:3000/sendemail

* Payload sample with ejs template 'sample'

```json
{
  "to": "test@gmail.com",
  "from": "test@account.com",
  "subject":"test email",
  "template":"sample",
  "context": {
    "name": "bharath"
  }
}
```

* Payload sample with raw html content without template engine

```json
{
  "to": "test@gmail.com",
  "from": "test@account.com",
  "subject":"test email",
  "html": "<h1>test</h1>"
}
```

* templates directory has ejs templates which can be used to send emails.

## How to run

```shell
npm start
```
