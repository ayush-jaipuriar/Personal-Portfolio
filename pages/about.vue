<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="max-w-4xl mx-auto">
      <!-- Page Header -->
      <div 
        v-motion-fade-visible-once
        class="text-center mb-16"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get to know more about my background, journey, and what drives me as a developer.
        </p>
      </div>

      <!-- About Content with Responsive Layout -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Left Column: Personal Info -->
        <div 
          v-motion-fade-visible-once
          class="lg:w-2/5"
        >
          <!-- Profile Photo -->
          <div class="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/ayush-jaipuriar.jpeg" 
              alt="Ayush Jaipuriar"
              class="w-full h-auto"
            />
          </div>

          <!-- Quick Info -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Profile</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Name</h3>
                <p class="text-gray-900 dark:text-white">Ayush Jaipuriar</p>
              </div>
              
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                <p class="text-gray-900 dark:text-white">Hyderabad, India</p>
              </div>
              
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                <a href="mailto:jaipuriar.ayush@gmail.com" class="text-apple-blue-600 dark:text-apple-blue-400 hover:underline">jaipuriar.ayush@gmail.com</a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center space-x-4">
            <a 
              href="https://github.com/ayush-jaipuriar" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Icon name="mdi:github" class="h-8 w-8" aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayush-jaipuriar" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Icon name="mdi:linkedin" class="h-8 w-8" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Right Column: Story/Journey -->
        <div 
          class="lg:w-3/5"
        >
          <!-- Summary -->
          <div 
            v-motion-fade-visible-once
            class="prose dark:prose-invert prose-lg max-w-none mb-12"
          >
            <h2 class="text-3xl font-semibold mb-6">Summary</h2>
            <p class="dark:text-gray-300">
              A highly motivated and results-oriented Software Engineer currently contributing to key platform development at TransUnion. My experience is built upon a significant and progressive 4+ year tenure at Highradius, where I honed a comprehensive skill set across the entire software development lifecycle, from conception to deployment and maintenance. Based in the tech hub of Hyderabad, Telangana, India, I excel at tackling complex technical challenges and delivering high-quality software solutions.
            </p>
            <h3 class="text-2xl font-semibold mt-8 mb-4">Technical Expertise</h3>
            <ul class="list-disc pl-5 space-y-2 dark:text-gray-300">
              <li><strong>Backend:</strong> Extensive hands-on experience with Spring Framework (inc. Boot), Hibernate, Java (up to 17), Microservices, RESTful APIs, and Struts.</li>
              <li><strong>Frontend:</strong> Skilled in React, React Native + Expo, Redux, ExtJS 6, and VueJS, focusing on responsive and user-centric UIs.</li>
              <li><strong>Databases:</strong> Well-versed in MySQL, PostgreSQL (via Hibernate), and MongoDB, including data modeling and query optimization.</li>
              <li><strong>Version Control:</strong> Highly adept at Git (including Gitflow), GitHub, and Gitlab for source code management and team collaboration.</li>
              <li><strong>DevOps & Cloud:</strong> Competent in AWS (EKS), Docker, Docker Swarm, Kubernetes, Jenkins CI/CD, Linux, BASH scripting, and Firebase.</li>
              <li><strong>Development Tools:</strong> Proficient with VS Code, Eclipse, IntelliJ, Postman, JIRA, and Confluence.</li>
              <li><strong>AI Tools:</strong> Exploring Cursor AI, Windsurf, Claude, and Langchain to enhance productivity.</li>
            </ul>
          </div>

          <!-- Experience, Education, Certs, Awards -->
          <div class="space-y-12">
            <!-- Work Experience -->
            <div v-motion-fade-visible-once>
              <h2 class="text-3xl font-semibold mb-6">Work Experience</h2>
              <div class="space-y-6">
                <!-- TransUnion -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Software Developer</h3>
                  <p class="text-lg text-gray-600 dark:text-gray-400">TransUnion</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">May 2024 - Present | Hyderabad, Telangana, India</p>
                  <p class="mt-3 text-gray-700 dark:text-gray-300">
                    Key Developer in the OneTru Research Perspective and CIBIL Dispute Resolution Platform Team. Involved in the full development lifecycle (design, implementation, testing, deployment, maintenance) for critical platforms handling research insights and consumer credit disputes. Responsibilities include backend logic, API development, database interactions, performance tuning, and ensuring system reliability and security.
                  </p>
                </div>
                
                <!-- HighRadius - ASE II -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Associate Software Engineer II</h3>
                  <p class="text-lg text-gray-600 dark:text-gray-400">HighRadius</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">January 2023 - May 2024 (1 year 5 months) | Hyderabad, Telangana, India</p>
                  <ul class="list-disc pl-5 space-y-2 mt-3 text-gray-700 dark:text-gray-300">
                    <li>Led development and maintenance of critical parsing agents (BAI, MT940, CSV) for 30+ enterprise clients.</li>
                    <li>Achieved 92% reduction in API load time and 62% decrease in file parsing time through SQL tuning, code refactoring, and algorithmic improvements (Account Status, CSV Parser).</li>
                    <li>Designed and implemented user-based data security controls for transactional data.</li>
                    <li>Conducted successful POC for Tomcat hot reload in Eclipse to improve developer productivity.</li>
                    <li>Collaborated with Cash Forecasting and Core platform teams on cross-functional user stories.</li>
                    <li><strong>Tech Stack:</strong> Java 17, JavaScript, ExtJS, Spring Framework (Spring Boot), Hibernate, SQL, AWS, Redis.</li>
                  </ul>
                </div>

                <!-- HighRadius - ASE -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Associate Software Engineer</h3>
                  <p class="text-lg text-gray-600 dark:text-gray-400">HighRadius</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">June 2021 - March 2023 (1 year 10 months) | Hyderabad, Telangana, India</p>
                  <ul class="list-disc pl-5 space-y-2 mt-3 text-gray-700 dark:text-gray-300">
                    <li>Integral role in implementing critical modules ('Account Status', 'Cash Position Worksheet') using full-stack skills (Java 17, Spring, Hibernate, Struts, MySQL, JavaScript, ExtJS).</li>
                    <li>Automated 50+ JUnit and JMeter tests, bolstering code quality and test coverage.</li>
                    <li>Identified and resolved 100% of SonarQube vulnerabilities across key modules.</li>
                    <li>Resolved 50+ complex implementation tickets and delivered features across 10+ user stories.</li>
                    <li><strong>Tech Stack:</strong> Java 8, JavaScript, Spring Framework, Hibernate, SQL, ExtJS, Struts.</li>
                  </ul>
                </div>

                <!-- HighRadius - Intern -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Software Engineer Intern</h3>
                  <p class="text-lg text-gray-600 dark:text-gray-400">HighRadius</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">July 2020 - June 2021 (1 year)</p>
                  <ul class="list-disc pl-5 space-y-2 mt-3 text-gray-700 dark:text-gray-300">
                    <li>Built and deployed high-performance web scraping agents for collecting payment data from diverse sources (web portals, email, EDI, OCR).</li>
                    <li>Earned 'HighFlyer Intern' and 'Star Team' accolades for delivering critical automation agents used by 15+ clients and enhancing the development framework.</li>
                  </ul>
                </div>

                <!-- HighRadius - Trainee -->
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Summer Trainee</h3>
                  <p class="text-lg text-gray-600 dark:text-gray-400">HighRadius</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">April 2020 - July 2020 (4 months) | Bhubaneswar, Orissa, India</p>
                  <ul class="list-disc pl-5 space-y-2 mt-3 text-gray-700 dark:text-gray-300">
                    <li>Developed a full-stack invoice management web app (React.js, Java, MySQL, Python - Pandas, NumPy, Matplotlib).</li>
                    <li>Integrated features: ML model for payment prediction, NLP chatbot (DialogFlow), interactive analytics dashboard (Crossfilter, Highcharts).</li>
                    <li>Successfully integrated components into a cohesive SPA using React and Material-UI.</li>
                  </ul>
                </div>

              </div>
            </div>

            <!-- Education -->
            <div v-motion-fade-visible-once>
              <h2 class="text-3xl font-semibold mb-6">Education</h2>
              <div class="space-y-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">BTech - Bachelor of Technology, Computer Science</h3>
                  <p class="text-lg text-gray-600 dark:text-gray-400">Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar</p>
                  <p class="text-sm text-gray-500 dark:text-gray-500">June 2017 - June 2021</p>
                  <p class="mt-3 text-gray-700 dark:text-gray-300">
                    A rigorous program focused on foundational computer science principles, algorithms, data structures, operating systems, database management, networking, and software engineering methodologies.
                  </p>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div v-motion-fade-visible-once>
              <h2 class="text-3xl font-semibold mb-6">Certifications</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Modern Java - Functional Programming, Lambdas, Streams, Parallelism and Beyond</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Confirms advanced proficiency in modern Java features (Java 8+).</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Clean Code</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Signifies commitment to writing readable, maintainable, and robust code.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">DevOps Tools Training: GIT, Jenkins, Docker and Kubernetes</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Verifies hands-on capabilities with cornerstone DevOps tools.</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Java In-Depth: Become a Complete Java Engineer!</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Indicates comprehensive understanding of the Java platform.</p>
                </div>
                 <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Summer Internship</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Represents foundational, real-world practical experience.</p>
                </div>
              </div>
            </div>

            <!-- Honors & Awards -->
            <div v-motion-fade-visible-once>
              <h2 class="text-3xl font-semibold mb-6">Honors & Awards</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Star Team Award</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Formal recognition for exceptional collaborative efforts (HighRadius).</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Champ Award</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-500">Prestigious acknowledgment of outstanding individual performance (HighRadius).</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';

// Define metadata for the page
useHead({
  title: 'About Me | Ayush Jaipuriar',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Ayush Jaipuriar, my background, skills, and journey as a software engineer based in Hyderabad.'
    }
  ]
});
</script> 