import React from 'react';
import {
  About, Blog, Contacts, Education,
  Experience,Landing, Navbar, Projects, Skills
} from '../components';
import BackToTop from '../components/back-to-top/back-to-top';
import ChangeTheme from '../components/change-theme/change-theme';

function HomePage({ blogs, projects}) {

  return (
    <>
      <BackToTop />
      <ChangeTheme />
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects projects={projects}/>
      <Education />
      <Blog blogs={blogs} />
      <Contacts />
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://dev.to/api/articles?username=said7388');
    if (!res.ok) throw new Error('Failed to fetch blogs');
    const data = await res.json();
    const filteredBlogs = data.sort(() => Math.random() - 0.5);

    return {
      props: {
        blogs: filteredBlogs
      },
      revalidate: 3600, // ISR: revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      props: {
        blogs: []
      },
      revalidate: 60, // retry in 1 minute on error
    };
  }
}

export default HomePage
