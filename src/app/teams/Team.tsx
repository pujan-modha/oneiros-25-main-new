import Accordion from "../_LandingPageComponents/Accordion";

const committeesData = [
  {
    committeeName: "Web Development",
    execMembers: ["Ayush Shashi", "Kunal Yadav", "Pujan Modha", "Vasu Verma", "Arunabha Mukhopadhyay", "Jatin Tilwani"],
    coreMembers: ["Shubh Shrivastava", "Abhiman Panwar", "Tanishq Choudhary", "Nirmal Rajkumar", "K S Mahadevan", "Akshat Jaiswal"],
  },
  {
    committeeName: "Major Events",
    execMembers: ["Priyanshu", "Tarun Joshi", "Ikshita Bagla", "Pranav Bharadwaj", "Rhythm Taneja", "Rishi Joshi", "Amogh Bajpai", "Jyeshtha Nainani"],
    coreMembers: ["Aditya Mall", "Meetasha Kapur", "Krish Vyas", "Tiya Chhabra", "Ansh Verma", "Devansh Kothari", "Siddharth Mandal", "Harsh Yadav", "Keshav Raj", "Shaivi Adesh", "Harman Kaur Bhambra", "Kshitij Verma", "Sushant Singh", "Eshaan Saha", "Manthan Chawla", "Kakul Rawat", "Prem Mangwani", "Tanisha Mathur", "Yash Sharma", "Apoorv Shashwat"],
  },
  {
    committeeName: "Minor Events",
    execMembers: ["Akanksha Kumari", "Lalit M Rao", "Mansi Goel", "Samarth Kakkar", "Prarthana Srivastava", "Aditya Kumar Mishra", "Kritika Pahuja"],
    coreMembers: ["Agam Bhasin", "Shubham Lohia", "Sneha Dhanuka", "Krish Naik", "Suhani Goyal", "Shreesh Aggarwal", "Prakhar Srivastava", "Arjun Malhotra", "Janvi Chawla", "Paarth Yadav", "Gurleen Kaur", "Nitya Jain", "Prabal Pratap Singh", "Dhruv Chaturvedi", "Krish Sharma", "Aayushi Sabharwal", "Shambhavi Singh", "Mahak Agrawal", "Yash Sharma", "Apoorv Shashwat"],
  },
  {
    committeeName: "Productions",
    execMembers: ["Ayush Jaiswal", "Abhay Singh", "Akshat", "Archit Nigam", "Himalaya Sharma", "Dhairya Balani", "Muskan Agarwal", "Aradhya Khandelwal"],
    coreMembers: ["Krish Marwaha", "Udit Jhajhariya", "Satyam Rai", "Arushi Singh", "Mansi Negi", "Piyush Agarwal", "Parv Rangbulla", "Tamanna Yadav", "Harshit Attri", "Satya Agrawal", "Tanmay Shah", "Animesh Jain", "Akshat Attri", "Shifa Khan", "Mumukshu Bohra", "Aaradhya Deep Dwivedi", "Subhash Singh", "Siddham Gupta", "Kavya Kumar"],
  },
  {
    committeeName: "Operations",
    execMembers: ["Sajal Panwar", "Pratyush Sharma", "Daksh Rupani", "Kushar Bajaj", "Armaan Bedi", "Siddharth Dabas", "Jaskaran Singh", "Abhijeet Anand", "Hanish Gori", "Sai Bhanage", "Harsh Tomar"],
    coreMembers: ["Daksh Dev Vashishta", "Soham Sharma", "Madhav Choudhary", "Prachi Chauhan", "Aditya Agrawal", "Ashutosh Pareek", "Vibhesh Mishra", "Akshat Mishra", "Shivam Singh", "Viplav Kumar", "Nitish Rao", "Palak Chawla", "Ishani Lohar", "Diya", "Vaibhav Bansal", "Shreyas", "Aaditya Rajput", "Amaan Hussain", "Aryaveer", "Sukrit Sinha", "Soumya Arora", "Dev Dhawan", "Kalash Choudhary", "Arnav Chaudhary", "Sourya KVS"],
  },
  {
    committeeName: "Sponsorships",
    execMembers: ["Vidit Sood", "Anushka Sharma", "Rohit Singh", "Anubhav Jagnani", "Anuvansh Maheshwari", "Tushar Khanchandani"],
    coreMembers: ["Dev Kanabar", "Krish Jaiswal", "Mahi Sachdeva", "Pranjal Jain", "Bhumi Kumari", "Siddham Gupta", "Raj Maraiya", "Mitakshara Yadav", "Arnab Roy", "Aarav Sharma"],
  },
  {
    committeeName: "Finance & Registration",
    execMembers: ["Pavni Jain", "Kanishk Diwedi", "Priyanshi Bansal", "Tathya Govil", "Jatin Bhuria", "Eish Agarwal"],
    coreMembers: ["Maanya Gusain", "Hitesh Soni", "Harsh Dadhich", "Anshika Kumari", "Mukund Maheshwari", "Navya Rastogi", "Puneet Bang", "Milan Deep Kaur"],
  },
  {
    committeeName: "Curations",
    execMembers: ["Arya Vardhan", "Kanishka Pareek", "Aagman Shukla", "Shivam Ramasdani", "Alokik Agarwal", "Ram Chandra", "Daksh Jain", "Nitya Shukla"],
    coreMembers: ["Anshikka Mittal", "Shagun Chaturvedi", "Hitesh Soni", "Anant Srivastav", "Ashutosh", "Manvi Mishra", "Yashvi Garg"],
  },
  {
    committeeName: "Media",
    execMembers: ["Ashish Pandey", "Prerit Verma", "Asman Bindra", "Jyotiraditya Singh Parihar", "Vedant Agrawalla", "Shrey Aditya", "Suryansh Jain", "Mayank Chopra", "Yash Dhingra"],
    coreMembers: ["Aditya Gandhi", "Anil Jangir", "Anushree Kanoongo", "Apratim Pandey", "Ayushi Sahu", "Chirag Gupta", "Harsh Singh", "Het Patel", "Kamalnayan Panda", "Kanav Vats", "Kartikeya Chaturvedi", "Keerti Rajani", "Kumar Gourav Behera", "Manish Ganesha", "Meemansha Srivastava", "Mehul Bansal", "Mehul Srivastava", "Mishty Gupta", "Nemat Sachdeva", "Nikunj Gupta", "Nirmay Nimkar", "Nishant Prasad", "Paridhi Dua", "Parth Mehta", "Pranav Joshi", "Rishit Prakash Jaiswal", "Tushar Shandilya", "Ziya Parween"],
  },
  {
    committeeName: "Social Media",
    execMembers: ["Amit Patro", "Nishant Mishra", "Aayush Katyal", "Gunn Verma", "Sai Praketh", "Aditi Banga", "Palak Chawla", "Ritesh Mishra"],
    coreMembers: ["Vansh Vashisth", "Vaibhav Krishali", "Manalee Tamrekar", "Diya Sekhani", "Reet Ginotra", "Gaurav Kapoor", "Ipshita Raj", "Agrim Jain", "Ritwiza Aggarwal", "Krishna Chaturvedi", "Janvi Thawani", "Aaryan Bhatiya", "Prabhutva Gupta"],
  },
  {
    committeeName: "Graphic Design",
    execMembers: ["Nishant Mishra", "Dhruv Anand", "Diya Gaur", "Harsh Kamra", "Shreya Saihgal", "Himanshu Sagar"],
    coreMembers: ["Aakriti Sharma", "Parushi Srivastava", "Sankalp Jhamb", "Naman Verma", "Bhavya Wadhwani", "Shashank Bharat", "Arsh Adil", "Guneet Pahwa", "Aryan Verma", "Ashutosh Pareek", "Pulkit Soni", "Aditi Shringi", "Saksham Jain"],
  },
  {
    committeeName: "Marketing",
    execMembers: ["Ani Gupta", "Puneet Sharma", "Shubhdeep Singh", "Yash Thapa", "Harshneet Khana", "Aniket Mishra", "Aditya Gupta", "Aditya Nalwaya", "Vivek Shekhawat"],
    coreMembers: ["Deepanshu Singh", "Vansh Chuttani", "Aryan Arya", "Aakrisht Attri", "Meet Jain", "Piyush Bavtwal", "Shivang Dutta", "Prabhveer", "Shravni", "Kartik Garg", "Rishabh Tiwari", "Shobit", "Surbhi Porwal"],
  },
  {
    committeeName: "Hospitality",
    execMembers: ["Vrishti Jain", "Shreyas Kumar", "Shaurya Pratap Singh", "Harshit Rawat", "Mayank Maheshwari", "Auritro Banerjee", "Akash Mukherjee", "Anshika Sethi", "Bhavya Malik", "Rishita Jain", "Anushka Singh"],
    coreMembers: ["Aarav Sharma", "Aditya Singh", "Priyanshi Bharadwaj", "Himank Singh", "Himanshi Sharma", "Jatin Sangewar", "Khushi Arya", "Krishna Goel", "Mannat Chugh", "Pranav Upadhyay", "Gautam Kakkar", "Pearl Katoch", "Aditya Kulkarni", "Aadhya Mahajan", "Arif Islam Shaik", "Jiya Gupta", "Sanya Sinha", "Vibhas Aggarwal", "Arshita Sinha", "Anubhuti Anurag", "Ojas Kumar", "Sakya Samved Inukoti", "Priyanshi Bhadauria", "Sophie Jotshi"],
  },
  {
    committeeName: "Arts and Crafts",
    execMembers: ["Maldev Singh Chouhan", "Prishita Awasthi", "Kalash Mehrotra", "Nikunj Mehrotra", "Arindam Yadav", "Vanshika Sharma", "Nidhi Gehlot", "Ananya Gupta", "Ayush Batra", "Jacqueline Priyanka Pinto", "Aarsheyee Poudyal", "Sakshi Srivastava"],
    coreMembers: ["Rini Khandelwal", "Gunjan Goyal", "Vania Bhargava", "Prisha Kumari", "Nupur Anand Galphade", "Sakshi Sharma", "Akshat Gaur", "Ankit Singh", "Krati Garg", "Priyanshi Bhadauria", "Sarah Beg", "Aastha Bhardwaj", "Shreya Chauhan", "Kumar Gaurav", "Divyanshi Goel", "Anvesha Sahni", "Kumar Utsav", "Paakhi Singal", "Ananya Khandelwal", "Riya Tripathi", "Yashvir Singh Chauhan", "Bhavya Bansal", "Tamanna Lalwani", "Anushka Agarwal", "Sarthak Gupta", "Anvi Sarbhai", "Vidita Sachdeva", "Thanvi Reddy Abbavaram", "Shivani Chaudhary", "Bhanuja Ramuka", "Srinidhi Dulam", "Divya Jangid", "Mahi Khullar", "Saachi Jain", "Aanya Katyar", "Anadita Puri"],
  },
];

export default function Team() {
  return (
    <>
      {committeesData.map((committee, index) => {
        const execMembersHTML = `
    <h4 class="font-black text-2xl pb-2">Exec Members</h4>
    <div class="grid grid-cols-3 gap-4">
      ${committee.execMembers
        .map(
          (member) => `
        <div class='bg-[#282828] p-4 rounded-xl shadow-md shadow-[#AAAAAA10]'>
          <p>${member}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;

        const coreMembersHTML = `
    <h4 class="font-black text-2xl py-2">Core Members</h4>
    <div class="grid grid-cols-3 gap-4">
      ${committee.coreMembers
        .map(
          (member) => `
        <div class='bg-[#282828] p-4 rounded-xl shadow-md shadow-[#AAAAAA10]'>
          <p>${member}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;

        const contentHTML = execMembersHTML + coreMembersHTML;

        return <Accordion key={index} title={committee.committeeName} content={contentHTML} />;
      })}
    </>
  );
}
