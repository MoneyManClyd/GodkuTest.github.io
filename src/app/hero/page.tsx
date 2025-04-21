// RedirectPage.tsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const RedirectPage: React.FC = () => {
  useEffect(() => {
    window.location.href = "https://media.discordapp.net/attachments/1312473750892970044/1349452217651826759/Screenshot_2025-03-13-00-00-41-304_com.discord-edit.jpg?ex=6807e2d0&is=68069150&hm=d5474b7df1fc80d8a70ba24252507c4d8e1fb7010e13a163854f5f7d1c0e1043&=&format=webp&width=846&height=881";
  }, []);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#1E90FF" />
        <meta property="og:title" content="Hero Project" />
        <meta property="og:description" content="GET OUT!" />
        <meta property="og:image" content="https://i.imgur.com/i5t0JV2.png" />
        <title>Redirecting...</title>
      </Helmet>
      <p>Redirecting...</p>
    </>
  );
};

export default RedirectPage;
