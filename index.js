const express = require('express');
const webpush = require('web-push');

const publicVapidKey = "BG17V-ixGmWBq-vOl95rsdw_itRo7EERcnunZ_bsberNtXJzzojsspycpMtGF6_tkR1R4YNRX_9NTS3K58pgKbU";
const privateVapidKey = "a_RpnuHx3yA4x7MrV05aNz81GQVSVYMMOcWP7sjCNVQ";

// Replace with your email
webpush.setVapidDetails('mailto:mhassa42@uic.edu', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.use(require('express-static')('./'));

app.listen(3000);
