This is a NextJS project that reproduces [this bug](https://github.com/resend/react-email/issues/1112).

To reproduce:

```bash
npm install
npm run dev

# You can now visit http://localhost:3000/email-media in your browser
# and notice that the page renders
#
# However...
# This will fail:
npm build
```

