## Medusa Web-Storefront using Next.js
![Medusa Hackathon 2022](./Medusa_Cover.jpg)

## About

### Participants
Sushant Gangwar - @sushantgwr

### Description

![Logo](./public/storefront_logo.png)

An open source ecommerce website demo made using next.js and medusa demo server. It also has cart system. It was created using context api with help of strater template provided by medusa and other tutorials.

Special Mentions:
- [Medusa Default Starter Repo](https://github.com/medusajs/nextjs-starter-medusa)
- [Tutorial for basic setup](https://blog.avneesh.tech/setup-e-commerce-white-medusa)

### Preview

![Demo](./Animation.gif)


## Set up Project

### Prerequisites
Before you start with the tutorial make sure you have

- Medusa CLI `npm install -g @medusajs/medusa-cli`
- [Node.js](https://nodejs.org/en/) v14 or greater installed on your machine
- [Medusa server](https://docs.medusajs.com/quickstart/quick-start/) v14 or greater installed on your machine

### Install Project

1. Clone the repository:

```bash
git clone https://github.com/sushantgwr87/medusa-storefront
```

2. Change directory and install dependencies:

```
cd medusa-storefront
medusa new medusa-server --seed
cd medusa-server
medusa develop
cd ..
cd medusa-storefront
npm i
npm run dev
```

## Resources
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Admin Panel](https://github.com/medusajs/admin)
- [Medusa Documentation](https://docs.medusajs.com/)
