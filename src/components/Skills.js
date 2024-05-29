import React from 'react';
import '../styles/Skills.css'; // Import custom CSS for styling
import CodeSnippet from '../components/CodeSnippet'; // Import CodeSnippet component


const Skills = () => {
  // Sample code snippets for JavaScript and C#
  const codeSnippets = [
    {
        language: 'javascript',
        code: `const name = "John";
        function greet() {
          console.log("Hello!", name);
        }` 
    },
    {
        language: 'csharp',
        code: `string name = "John";
        public void Greet() {
          Console.WriteLine("Hello!", name);
        }` 
    }
  ]

  
  return (
    <section className="bsb-skill-1 py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Skills</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Tools & Technologies */}
          <div className="col-12 col-sm-6 col-xl-5">
            <div className="rounded skills-list text-center">
              <ul className="list-unstyled d-flex justify-content-center flex-wrap">
                <li className="mx-3 mb-3">
                  <i className="fab fa-js fa-2x"></i> {/* JavaScript Icon */}
                </li>
                <li className="mx-3 mb-3">
                  <i className="fab fa-cuttlefish fa-2x"></i> {/* C# Icon */}
                </li>
                {/* Other skills icons */}
              </ul>
            </div>
          </div>
        </div>

        {/* Code Snippet Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 className="mb-4 display-6 text-center">Code Examples</h3>
            {codeSnippets.map((snippet, index) => (
              <div key={index} className="mb-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4>{snippet.language}</h4>
                </div>
                <CodeSnippet code={snippet.code} language={snippet.language} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
