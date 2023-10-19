import React, { useState } from 'react';
import './NewsletterDashboard.css';

const NewsletterDashboard = () => {
  const [techNews, setTechNews] = useState([
    { title: "Example News Title", content: "This is demo content that will be shown under the title. Change this css if you dont like it.", learnMoreLink: "https://www.linktr.ee/hetsonii" },
  ]);

  const [writeUps, setWriteUps] = useState([
    { title: "Example Write-up Title", link: "https://www.google.com" },
  ]);

  const [events, setEvents] = useState([
    {
      title: "Example Event Title",
      imageLink: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11N9kp.img",
      description: "This is demo content that will be shown under the title. Change this css if you dont like it.",
      learnMoreLink: "https://www.linktr.ee/hetsonii",
    },
  ]);

  const [memes, setMemes] = useState([
    { imageLink: "https://th.bing.com/th/id/R.e0d358a3484fd98bcba6c0aad4a115a1?rik=96bVi7pdnuh1pQ&riu=http%3a%2f%2fimages.memes.com%2fmeme%2f891643&ehk=IVZojg6pOCy6ceD0sQt%2fyAZD4X1cRiJSv0%2bMl9D2AaE%3d&risl=&pid=ImgRaw&r=0", caption: "This is literally the funniest thing I've heard" },
    { imageLink: "https://th.bing.com/th/id/OIP.bfseb6PR-CnzXbaVyOapXQAAAA?pid=ImgDet&w=293&h=246&rs=1", caption: "This is literally the 2nd funniest thing I've heard" },
  ]);

  const handleAddTechNews = () => {
    setTechNews([...techNews, { title: "", content: "", learnMoreLink: "" }]);
  };

  const handleAddWriteUp = () => {
    setWriteUps([...writeUps, { title: "", link: "" }]);
  };

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        title: "",
        imageLink: "",
        description: "",
        learnMoreLink: "",
      },
    ]);
  };

  const handleAddMeme = () => {
    setMemes([...memes, { imageLink: "", caption: "" }]);
  };

  const handleDeleteTechNews = (index) => {
    const updatedTechNews = [...techNews];
    updatedTechNews.splice(index, 1);
    setTechNews(updatedTechNews);
  };

  const handleDeleteWriteUp = (index) => {
    const updatedWriteUps = [...writeUps];
    updatedWriteUps.splice(index, 1);
    setWriteUps(updatedWriteUps);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const handleDeleteMeme = (index) => {
    const updatedMemes = [...memes];
    updatedMemes.splice(index, 1);
    setMemes(updatedMemes);
  };

  const generateHtmlFile = () => {
    const cssStyles = `
    /* Reset styles to ensure consistency across email clients */
    body,
    p,
    h1,
    h2,
    h3,
    ul,
    li {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      background-color: #f9f9f9;
      /* Light gray background color */
    }

    ul {
      list-style-type: none;
    }

    /* Define CSS for the newsletter layout */
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      /* White background color */
      border: 1px solid #e0e0e0;
      /* Light gray border */
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      /* Add a subtle shadow effect */
    }

    .header {
      background-color: #63BFF4;
      padding: 20px;
      color: #fff;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }

    .header h1 {
      font-size: 32px;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      /* Add a shadow effect to the header text */
    }

    .headers {
      color: #63BFF4;
    }

    .content {
      padding: 20px;
    }

    .content img {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      /* Add a subtle shadow effect to images */
    }

    .news-header {
      margin-bottom: 5px;
      margin-top: 5px;
    }

    .news-item {
      margin-bottom: 30px;
      border-bottom: 1px solid #e0e0e0;
      /* Light gray border between news items */
      padding-bottom: 20px;
      /* Add some space between news items */
    }

    .news-item a {
      font-size: 20px;
      color: #333;
      text-decoration: none;
    }

    .news-item a:hover {
      /* text-decoration: underline; */
      /* Underline on hover for links */
    }

    .events {
      padding: 20px;
      color: #333;
      /* Darker text color for events */
    }

    .events h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }

    .event-item {
      margin-bottom: 30px;
      padding: 20px;
      background-color: #f5f5f5;
      /* Light gray background for event item */
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      /* Add a subtle shadow effect */
    }

    .event-item h3 {
      font-size: 22px;
      margin-bottom: 15px;
      color: #333;
    }

    .event-item img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      margin-bottom: 15px;
    }

    .learn-more-btn {
      display: inline-block;
      padding: 10px 15px;
      background-color: #63BFF4;
      /* Primary color for button */
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      font-size: 17px;
      margin-top: 10px;
      margin-bottom: 10px;
      transition: background-color 0.3s ease;
    }

    .learn-more-btn:hover {
      background-color: #4FA4D6;
      /* Darker color on hover */
    }

    .learn-more-news-btn {
      display: inline-block;
      padding: 5px 10px;
      background-color: #63BFF4;
      /* Primary color for button */
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      font-size: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
      transition: background-color 0.3s ease;
    }

    .learn-more-news-btn:hover {
      background-color: #4FA4D6;
      /* Darker color on hover */
    }

    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 10px;
      border-top: 1px solid #e0e0e0;
      /* Light gray border for footer */
      color: #888;
      /* Lighter text color for footer */
    }

    .footer a {
      color: #63BFF4;
      /* Use the primary color for footer links */
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
      /* Underline on hover for footer links */
    }
    `;

    const htmlTemplate = `<!DOCTYPE html>
      <html>
      <head>
        <title>Newsletter</title>
        <style>
          ${cssStyles}
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Title of Newsletter</h1>
          </div>
          <!-- Tech News section -->
          <div class="content">
            <h2 class="headers">Tech News</h2>
            <br />
            ${techNews
        .map(
          (item) => `<div class="">
                   <h3 class="news-header">${item.title}</h3>
                   <p>${item.content}</p>
                   <a class="learn-more-news-btn" href="${item.learnMoreLink}">Learn more</a>
                 </div>`
        )
        .join('')}
          </div>
          <!-- Write-ups section -->
          <div class="content">
            <h2 class="headers">Featured Write-ups</h2>
            <br />
            <ul class="news-list">
              ${writeUps
        .map(
          (item) =>
            `<li class="news-item"><a href="${item.link}">${item.title}</a></li>`
        )
        .join('')}
            </ul>
          </div>
          <!-- Events section -->
          <div class="content">
            <h2 class="headers">Upcoming Events</h2>
            <br />
            ${events
        .map(
          (event) => `<div class="event-item">
                  <h3>${event.title}</h3>
                  <img src="${event.imageLink}" alt="${event.title}" />
                  <p>${event.description}</p>
                  <a class="learn-more-btn" href="${event.learnMoreLink}">Learn more</a>
                </div>`
        )
        .join('')}
          </div>
          <!-- Memes section -->
          <div class="content">
            <h2 class="headers">Memes of the Week</h2>
            <br />
            ${memes
        .map(
          (meme) => `<div class="news-item">
                  <img src="${meme.imageLink}" alt="Meme" />
                  <p>${meme.caption}</p>
                </div>`
        )
        .join('')}
          </div>
        </div>
      </body>
      </html>`;

    const blob = new Blob([htmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter.html';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
  };


  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Blog Generator</h1>
      </div>

      {/* Tech News section */}
      <div className="section">
        <h2>Tech News</h2>
        <br />
        {techNews.map((item, index) => (
          <div className="input-group" key={index}>
            <input
              type="text"
              placeholder="News Title"
              value={item.title}
              onChange={(e) => {
                const updatedTechNews = [...techNews];
                updatedTechNews[index].title = e.target.value;
                setTechNews(updatedTechNews);
              }}
            />
            <textarea
              placeholder="News content goes here."
              value={item.content}
              onChange={(e) => {
                const updatedTechNews = [...techNews];
                updatedTechNews[index].content = e.target.value;
                setTechNews(updatedTechNews);
              }}
            />
            <input
              type="text"
              placeholder="Learn More Link"
              value={item.learnMoreLink}
              onChange={(e) => {
                const updatedTechNews = [...techNews];
                updatedTechNews[index].learnMoreLink = e.target.value;
                setTechNews(updatedTechNews);
              }}
            />
          </div>

        ))}

        <div className="delete-button-container">
          <button onClick={handleAddTechNews} className="add-button">+</button>
          <button onClick={handleDeleteTechNews} className="delete-button">Delete</button>
        </div>
      </div>

      {/* Write-ups section */}
      <div className="section">
        <h2>Featured Write-ups</h2>
        <br />
        <ul className="news-list">
          {writeUps.map((item, index) => (
            <li className="input-group" key={index}>
              <input
                type="text"
                placeholder="Write-up Title"
                value={item.title}
                onChange={(e) => {
                  const updatedWriteUps = [...writeUps];
                  updatedWriteUps[index].title = e.target.value;
                  setWriteUps(updatedWriteUps);
                }}
              />
              <input
                type="text"
                placeholder="Link to Write-up"
                value={item.link}
                onChange={(e) => {
                  const updatedWriteUps = [...writeUps];
                  updatedWriteUps[index].link = e.target.value;
                  setWriteUps(updatedWriteUps);
                }}
              />
            </li>
          ))}
        </ul>
        <div className="delete-button-container">
          <button onClick={handleAddWriteUp} className="add-button">+</button>
          <button onClick={handleDeleteWriteUp} className="delete-button">Delete</button>
        </div>
      </div>
      {/* Events section */}
      <div className="section">
        <h2>Upcoming Events</h2>
        <br />
        {events.map((event, index) => (
          <div className="input-group" key={index}>
            <input
              type="text"
              placeholder="Event Title"
              value={event.title}
              onChange={(e) => {
                const updatedEvents = [...events];
                updatedEvents[index].title = e.target.value;
                setEvents(updatedEvents);
              }}
            />
            <input
              type="text"
              placeholder="Image Link"
              value={event.imageLink}
              onChange={(e) => {
                const updatedEvents = [...events];
                updatedEvents[index].imageLink = e.target.value;
                setEvents(updatedEvents);
              }}
            />
            <textarea
              placeholder="Event Description"
              value={event.description}
              onChange={(e) => {
                const updatedEvents = [...events];
                updatedEvents[index].description = e.target.value;
                setEvents(updatedEvents);
              }}
            />
            <input
              type="text"
              placeholder="Learn More Link"
              value={event.learnMoreLink}
              onChange={(e) => {
                const updatedEvents = [...events];
                updatedEvents[index].learnMoreLink = e.target.value;
                setEvents(updatedEvents);
              }}
            />
          </div>
        ))}
        <div className="delete-button-container">
          <button onClick={handleAddEvent} className="add-button">+</button>
          <button onClick={handleDeleteEvent} className="delete-button">Delete</button>
        </div>
      </div>
      {/* Memes section */}
      <div className="section">
        <h2>Memes of the Week</h2>
        <br />
        {memes.map((meme, index) => (
          <div className="input-group" key={index}>
            <input
              type="text"
              placeholder="Image Link"
              value={meme.imageLink}
              onChange={(e) => {
                const updatedMemes = [...memes];
                updatedMemes[index].imageLink = e.target.value;
                setMemes(updatedMemes);
              }}
            />
            <textarea
              placeholder="Meme Caption"
              value={meme.caption}
              onChange={(e) => {
                const updatedMemes = [...memes];
                updatedMemes[index].caption = e.target.value;
                setMemes(updatedMemes);
              }}
            />
          </div>
        ))}
        <div className="delete-button-container">
          <button onClick={handleAddMeme} className="add-button">+</button>
          <button onClick={handleDeleteMeme} className="delete-button">Delete</button>
        </div>
      </div>
      {/* <div className="footer">
                <p>© 2023 Your University Tech News</p>
                <p>
                    <a href="your-website-link">Visit our website</a>
                </p>
            </div> */}
      <button className="generate-btn" onClick={generateHtmlFile}>Generate Blog</button>
    </div>
  );
};

export default NewsletterDashboard;
