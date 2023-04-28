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
      mistakes: [
        `Lack of effective communication between school administration and parents/students`,
        `Inadequate training of teachers and staff to handle violent situations`,
        `Insufficient funding for school security and safety measures`,
        `Poorly maintained school buildings and facilities`,
        `Lack of accountability for those responsible for student safety`,
      ],
      problem: `Safety in Rochester City Schools has been a major concern for staff, parents, and students, with incidents of violence and harassment being reported frequently. This has resulted in a decline in the quality of education and a negative impact on student performance.`,
      solution: [
        `Establish a School Safety Task Force to develop and implement comprehensive safety plans for each school in the district.`,
        `Provide training to teachers and staff on how to respond to violent situations and create a crisis response team in each school.`,
        `Increase funding for security measure such as security cameras, metal detectors, and additional security personnel.`,
        `Prioritize maintenance and repairs for school buildings and facilities to ensure they are safe and secure.`,
        `Hold school administrators accountable for ensuring a safe and secure learning environment for students.`,
      ],
      subheading: `Putting Safety First`,
      text: `Join me in advocating for the safety of our students and staff. Together, let's implement comprehensive safety measures in our schools and ensure a safe and secure learning environment for all.`,
      title: `Safety`,
    },
    {
      id: generateId(),
      mistakes: [
        `Lack of transparency in the district's finances and decision-making processes`,
        `Inadequate communication with parents, students, and the community`,
        `Failure to provide timely and accurate information about district operations and programs`,
        `Poor management of public records and documents`,
        `Lack of accountability for those responsible for ensuring transparency`,
      ],
      problem: `Transparency in Rochester City Schools has been a major concern for parents and the community for several years, with issues such as lack of information about district operations and programs, and inadequate communication with parents and the community being reported frequently. This has resulted in a loss of public trust and a decline in the quality of education.`,
      solution: [
        `Increase transparency by providing regular updates on district finances and decision-making processes through public meetings and reports.`,
        `Improve communication with parents, students, and the community through regular town hall meetings, newsletters, and other outreach efforts.`,
        `Develop and implement a comprehensive plan to improve the management of public records and documents, with clear guidelines and accountability measures.`,
        `Provide timely and accurate information about district operations and programs through a centralized information portal and other communication channels.`,
        `Hold school administrators and board members accountable for ensuring transparency and responsiveness to the community.`,
      ],
      subheading: `Building Trust in Our Schools`,
      text: `Join me in advocating for greater transparency in our school board. Together, let's ensure that our decisions and actions serve the best interests of our students and community.`,
      title: `Transparency`,
    },
    {
      id: generateId(),
      mistakes: [
        `Lack of transparency in the district's decision-making processes`,
        `Inadequate oversight of district operations and programs`,
        `Failure to address academic achievement gaps and student underperformance`,
        `Failure to hold school administrators and board members accountable for their actions`,
        `Poor communication with parents, students, and the community`,
      ],
      problem: `The Rochester City School District has struggled with accountability for years, with issues such as financial mismanagement, low academic achievement, and lack of transparency being reported frequently. This has resulted in a loss of public trust and a decline in the quality of education.`,
      solution: [
        `Increase transparency by providing regular updates on district decision-making processes through public meetings and reports.`,
        `Establish an independent oversight committee to monitor district operations and programs and hold administrators and board members accountable for their actions.`,
        `Develop and implement a comprehensive plan to address academic achievement gaps and student underperformance, with clear benchmarks and accountability measures.`,
        `Increase communication with parents, students, and the community through regular town hall meetings and other outreach efforts.`,
        `Implement a system to collect and respond to feedback from parents, students, and the community to improve district operations and programs.`,
      ],
      subheading: `Making Our Schools the Best They Can Be`,
      text: `As a school board candidate, I believe that accountability is key to ensuring our schools are providing the best education possible for our students.`,
      title: `Accountability`,
    },
  ];

  return issues;
};
