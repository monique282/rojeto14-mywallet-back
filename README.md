# Desadio-Técnico - Back-end

Back-end MyWallet, an application where you can take control of your finances
## About


In this application it is possible to manage the back-end to control all your expenses, being able to enter what goes out and what comes in and get a result of how much is still positive or when it should be.

## Deploy link
<a href="https://projeto14-mywallet-front-monique282.vercel.app/">
MyWallet </a>


## How it works
This project was created to serve as a cost control. It has only three entities: `register`, `login`, `transaction`, `nova-transacao/:tipo` and `delete` . The characteristics of each entity are:

- Resiter: consists of a post that if the user does not have a registration, they will register.

- Login: consists of a post, which if the user already has a registration, they will log in to have access to the application.

- Transaction: consists of a get, which searches for all user transactions, and a post that adds new transactions.

- Delete: consists of a delete that deletes a transaction chosen by the user.



# Technologies used
For this project, the following were used:

- Node (versão 18.8.0);
- Express;
- Cors;
- MongoDb;
- Joi;
- Axios;
- Bcrypt;
- Uuid;

## How to run for development


1. Install all dependencies

```bash
npm i
```

2. Create a Mongodb database with whatever name you want
3. Configure the `.env` file using the `.env.example` file
4. To run the application

```bash
npm run dev
```


