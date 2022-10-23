## Medusa Web-Storefront using Next.js
![Medusa Hackathon 2022](./Medusa_Cover.jpg)

## About

### Participants
Sushant Gangwar - @sushantgwr

### Description

An open source ecommerce website made using next.js and medusa demo server. It has cart system.

### Preview

![Demo](https://s5.gifyu.com/images/Screen_Recording_2022-09-01_at_11.13.49_PM_1-online-video-cutter.com-1-1.gif)


## Set up Project

### Prerequisites
Before you start with the tutorial make sure you have

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
