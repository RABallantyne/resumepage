import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="overview">
        <p>
          Full stack web developer with a passion for solving real world
          problems. Experience in Ruby on Rails, JavaScript, React and NodeJS
          and a background in Restaurant Management. I bring strong skills in
          team-building, project management, vendor relations and organization
          to help create efficiency, cost control, and client satisfaction.
        </p>
      </div>

      <div className="section-title">
        <div className="title-content">TECHNICAL PROJECTS</div>
      </div>
      {/* BARBACK */}
      <div className="info-section">
        <div className="info-header">
          <span className="info-title">BarBack</span>{" "}
          <span>React | NodeJS</span>
          <span>
            <a
              href="https://github.com/RABallantyne/barback-frontend"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </span>
          <span>
            <a
              href="https://github.com/RABallantyne/bar-back-api"
              rel="noopener noreferrer"
              target="_blank"
            >
              API
            </a>
          </span>
          <p>
            App for controlling bar inventory, creating menus and
            building/costing cocktails.
          </p>
        </div>
        <div className="info-points">
          <p>
            + Utilized Auth 0 for a highly secure login with the option of using
            Google.{" "}
          </p>
          <p>
            + Designed and styled an intuitive user experience with clear and
            obvious navigation using Bootstrap 4 and custom CSS.
          </p>
          <p>
            + Utilized years of bar management experience to allow users to
            customize and clearly understand costs.
          </p>
          <p>
            + Learned and utilized Node in a matter of days to create a
            lightweight API.
          </p>
          <p>
            + Implemented asynchronous CRUD actions for bars, menus, drinks, and
            ingredients.
          </p>
        </div>
      </div>
      {/* RECORD SMART */}

      <div className="info-section">
        <div className="info-header">
          <span className="info-title">Record Smart</span>{" "}
          <span>JavaScript | Ruby on Rails</span>
          <span>
            <a
              href="https://github.com/RABallantyne/record-smart-frontend"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </span>
          <span>
            <a
              href="https://github.com/RABallantyne/record-smart-backend"
              rel="noopener noreferrer"
              target="_blank"
            >
              API
            </a>
          </span>
          <p>App for planning and organizing recording sessions.</p>
        </div>
        <div className="info-points">
          <p>+ Designed and styled site using custom CSS.</p>
          <p>
            + Optimized user experience with full CRUD for parts, songs, and
            recording projects.
          </p>
          <p>+ Utilized JWT tokens for a secure login.</p>
        </div>
      </div>

      {/* TreeFIND */}

      <div className="info-section">
        <div className="info-header">
          <span className="info-title">TreeFind</span> <span>Ruby </span>
          <span>
            <a
              href="https://github.com/lukemenard/TreeFind"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </span>
          <p>Ruby CLI app for identifying trees based on a leaf sample.</p>
        </div>
        <div className="info-points">
          <p>+ Created a robust app utilizing only Ruby.</p>
          <p>
            + Used a variety of gems to create a user friendly CLI experience
            including option menus and pictures.
          </p>
          <p>
            + Developed complex logic to narrow down from over 30 tree species
            commonly found in Colorado.
          </p>
        </div>
      </div>

      <div className="section-title">
        <div className="title-content">TECHNICAL SKILLS</div>
      </div>
      <div className="info-section">
        <div className="info-header">
          <span>
            Ruby, Rails, SQL, PostgreSQL, JavaScript, React, Node.js, HTML, CSS,
            Adobe Suite
          </span>
        </div>
      </div>
      <div className="section-title">
        <div className="title-content">EMPLOYMENT HISTORY</div>
      </div>
      <div className="info-section">
        <div className="info-header">
          <span className="info-title">Ash'Kara</span> <span> Denver, CO </span>
          <p>General Manager, September 2018 - July 2019</p>
        </div>
        <div className="info-points">
          <p>
            + Managed all opening operations of the restaurant, taking the
            restaurant from concept to opening in 7 weeks.
          </p>
          <p>
            + Negotiated vendor contracts and managed continued vendor
            relationships.
          </p>
          <p>
            + Handled all restaurant accounting, including AR and AP, inventory,
            and sales reporting.
          </p>
          <p>
            + Managed all hiring, training, and scheduling for all FOH staff.
          </p>
          <p>
            + Created numerous operational tools including bar cost control
            worksheets, tip pool worksheets, and training materials.
          </p>
          <p>
            + Managed all aspects of the bar program, including cocktail
            development, wine and beer selection, and cost/inventory control.
          </p>
        </div>
      </div>
      <div className="info-section">
        <div className="info-header">
          <span className="info-title">Avanti Food & Beverage</span>{" "}
          <span> Denver, CO </span>
          <p>Assistant General Manager, March 2016 - May 2018</p>
        </div>
        <div className="info-points">
          <p>
            + Created an excellent guest experience by maintaining a high level
            of service, creating a fun and inviting atmosphere, and engaging
            with guests.
          </p>
          <p>
            + Managed all hiring, training, and scheduling for a staff of 50+
            team members. Worked to balance labor costs with staffing needs in a
            very dynamic setting. Employed a variety of tactics to create a fun
            and positive work environment.
          </p>
          <p>
            + Handled all restaurant accounting, including AR and AP, inventory,
            and sales reporting.
          </p>
          <p>
            + Managed all hiring, training, and scheduling for all FOH staff.
          </p>
          <p>
            + Created and implemented numerous operational tools such as bar
            cost control worksheets, restaurant supply inventory and ordering
            control worksheets, and a point based tip pool worksheet.
          </p>
          <p>
            + Managed repairs and maintenance; working with numerous vendors and
            performing many tasks personally to cut costs.
          </p>
        </div>
      </div>
      <div className="section-title">
        <div className="title-content">EDUCATION</div>
      </div>
      <div className="info-section">
        <div className="info-header">
          <span className="info-title">Flatiron School</span>{" "}
          <span> Denver, CO - 2019 </span>
        </div>
        <div className="info-points">
          <p>
            + Full Stack Web Development, Ruby on Rails, and JavaScript program.
          </p>
        </div>
      </div>
      <div className="info-section">
        <div className="info-header">
          <span className="info-title">University of Colorado at Boulder</span>{" "}
          <span> Boulder, CO - 2006 </span>
        </div>
        <div className="info-points">
          <p>
            + Degree: Business Administration with an emphasis in
            Entrepreneurial Studies.
          </p>
        </div>
      </div>
    </div>
  );
}
