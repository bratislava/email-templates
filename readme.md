# React Email Starter

Templates for emails used when sending through Mailgun.
Advantages of using this tool:

- Build in dummer version of HTML, not all things that works in html will work in email html, [example](https://blog.edmdesigner.com/html-email-padding-margin-border/)
- Reuse of components

## Getting Started

First, install the dependencies:

```sh
yarn
```

Then, run the development server:

```sh
yarn dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying

1. Create mail using this tool
2. Upper tabs has tab `Source` and lower tabs has tab `HTML` ![Screenshot](assets/react-email-html.png)
3. This code has to be uploaded to [mailgun](https://login.mailgun.com/login/) for credentials ask any developer
   - set desired domain, mostly we are using `digital.bratislava.sk` but it depends
   - Left menu `Sending` -> `Templates` ![Screenshot](assets/mailgun.png)
   - Create new template and paste code from `HTML` tab

## License

MIT License
