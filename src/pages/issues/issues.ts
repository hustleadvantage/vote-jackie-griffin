import { v4 as uuidv4 } from 'uuid';

type Issue = {
  id: string;
  title: string;
  subheading: string;
  mistakes: string[];
  problem: string;
  solution: string[];
  text: string;
};

const generateId = () => uuidv4();

export const getIssues = () => {
  const issues: Issue[] = [
    {
      id: generateId(),
      title: `Accountability`,
      subheading: `Making Our Schools the Best They Can Be`,
      text: `As a school board candidate, I believe that accountability is key to ensuring our schools are providing the best education possible for our students.`,
      problem: `The Rochester City School District has struggled with accountability for years, with issues such as financial mismanagement, low academic achievement, and lack of transparency being reported frequently. This has resulted in a loss of public trust and a decline in the quality of education.`,
      mistakes: [
        `Lack of transparency in the district's decision-making processes`,
        `Inadequate oversight of district operations and programs`,
        `Failure to address academic achievement gaps and student underperformance`,
        `Failure to hold school administrators and board members accountable for their actions`,
        `Poor communication with parents, students, and the community`,
      ],
      solution: [
        `Increase transparency by providing regular updates on district decision-making processes through public meetings and reports.`,
        `Establish an independent oversight committee to monitor district operations and programs and hold administrators and board members accountable for their actions.`,
        `Develop and implement a comprehensive plan to address academic achievement gaps and student underperformance, with clear benchmarks and accountability measures.`,
        `Increase communication with parents, students, and the community through regular town hall meetings and other outreach efforts.`,
        `Implement a system to collect and respond to feedback from parents, students, and the community to improve district operations and programs.`,
      ],
    },
    {
      id: generateId(),
      title: `Safety`,
      subheading: `Making Safety A Priority`,
      text: `Join me in advocating for the safety of our students and staff. Together, let's implement comprehensive
      safety measures in our schools and ensure a safe and secure learning environment for all. We must
      return to the “Takes a Village” approach for our children’s sake.`,
      problem: `Safety in Schools across the Country, including Rochester City Schools, has been of major concern for staff, parents, and students. We must come together as a cohesive group of educators, parents, and
       students, as a community, lets pool our resources to keep our children safe in school, by empowering volunteer groups to meet a need, where everyone comes together and gets on board to address the issues that are causing our schools to fall apart, becoming the solution.`,
      mistakes: [
        `Insufficient funding for school security and safety measures`,
        `Lack of effective communication between educators and students/parents`,
        `Lack of professional training for staff to handle volatile situations, or defuse potential adverse events`,
        `Poorly maintained school buildings and facilities`,
        `Lack of accountability for those responsible for student safety`,
      ],
      solution: [
        `With the help of local policing agencies establish A School Safety Task Force to develop and implement comprehensive safety plans for each school in the district. Partner with schools which have effective processes in place and use that knowledge to develop a blueprint.`,
        `Knowledge is Power. Provide training to staff on how to respond to violence, natural disasters, possible terrorist threats, and particularly guns being brought into the school, by creating a crisis response team in each school.`,
        `Increase funding for security measures such as security cameras, metal detectors, and creating more jobs by hiring needed additional security personnel.`,
        `Prioritize renovations for school buildings and facilities, encompassing safety as priority one. Work with design teams to provide a pleasant esthetic, promoting an environment conducive to teaching and learning.`,
        `Hold the school district accountable for ensuring a safe and secure learning environment for students by creating a sound budget with effective oversight.  Make financial responsibility the number one goal.`,
        `Reinstating reading programs, the Arts, and music, home economics and writing. Implementing programs advocating for parents, children and educators.`,
      ],
    },
    {
      id: generateId(),
      title: `Transparency`,
      subheading: `Building Trust in Our Schools`,
      text: `Join me in advocating for greater transparency on our school board. Together, let's ensure that our decisions and actions serve the better interest of our communities.`,
      problem: `Transparency in Rochester City Schools has been a major concern for parents and the community for several years. This has resulted in a loss of public trust and a decline in the quality of education. Some of the more prominent issues are the lack of information about district operations and programs and inadequate communication with parents and the community.`,
      mistakes: [
        `Lack of transparency in the district's finances and decision-making processes`,
        `Inadequate communication with parents, students, and the community`,
        `Failure to provide timely and accurate information about district operations and programs`,
        `Poor management of public records and documents`,
        `Lack of accountability for those responsible for ensuring transparency`,
      ],
      solution: [
        `Increase transparency by providing regular updates on district finances and decision-making processes through public meetings and reports.`,
        `Improve communication with parents, students, and the community through regular town hall meetings, newsletters, and other outreach efforts which better serve the members of our communities and their unique needs.`,
        `Develop and implement a comprehensive plan to improve the management of public records and documents, with clear guidelines and accountability measures.`,
        `Provide timely and accurate information about district operations and programs through a centralized information portal and other communication channels.`,
        `Hold school administrators and board members accountable for ensuring transparency and responsiveness to the community.`,
      ],
    },
  ];

  return issues;
};
