import React, { useState } from 'react';
import ListData from './Component/ListData';

function App() {

  const [data, setData] = useState([
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/components/images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/components/images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/components/images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]);
  const [Copydata, setcopyData] = useState([
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/components/images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/components/images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/components/images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "https://raw.githubusercontent.com/codebucks27/react-job-listing-website/1ff839c53b58efafeb3eaeb9a77c6c525a45f125/src/images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]);

  const [search, setSearch] = useState("");

  const searchData = (e) => {
    setSearch(e.target.value);
    const newData = data.filter(el => el.role.toLowerCase().includes(search.toLowerCase()));

    if (e.target.value === '') {
      setData(Copydata);
    } else {
      setData(newData);
    }

  }


  return (
    <div>
      <header>
        <input type="text" placeholder="Search role..." onChange={searchData}></input>
      </header>
      <ListData data={data} />
    </div>
  )
}

export default App
