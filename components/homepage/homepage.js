import React from 'react';

const homepage = (props) => {
	return (

      <div className="row">
        <div className="top-picture">
        	<img src="/static/img/kennethKuttler.jpg" />
        </div>
        <div style={{width: '100%'}}>
        	<h1>Kenneth Kuttler</h1>
        	<h4>
        		This is the personal website of Dr. Kenneth Kuttler.
        	</h4>
        	<p>
        		All pdfs on this site are free to download and use. If you want to reach him send him an email at <a href="mailto:klkuttle@mathematics.byu.edu" target="_blank" class="">klkuttle@mathematics.byu.edu</a>
        	</p>
        </div>
        <div>
        	<b>Publications:</b>
        	<ul>
				<li>An elastic-viscoplastic quasistatic contact problem with damage: existence and uniqueness of a weak solution, Archive Rational Mechanics and Analysis, 191 (2009) 423-445.</li>
				<li>An existence and uniqueness result for an elasto-piezoelectric problem with damage, Mathematical Models and Methods in Applied Sciences., 19(1) (2009), 31-50.</li>
				<li>Existence results for dynamic adhesive contact of a rod, Journal of Math Analysis and Applications., 351 (2009), 781 -791.</li>
				<li>An elastic-viscoplastic quasistatic contact problem: existence and uniqueness of a weak solution, Archive Rational Mechanics and Analysis., 191 (2009), 423-445.</li>
				<li>Existence for the Thermoviscoelastic Thermistor Problem, Differential Equations and Dynamical Systems, 17 (2009), 1-17.</li>
				<li>Two rods in dynamic adhesive contact, Annals of the Academy of Romanian Scientists Series on Mathematics and its Applications, 1(1) (2009), 83-111.</li>
				<li>Dynamic analysis of two adhesively bonded rods, Annalsis of the Academy of Romanian Scientists Series on Mathematics and its applications, (2009), 1.</li>
				<li>A dynamic thermoviscoelastic problem: An existence and uniqueness result, Nonlinear analysis, 72(11) (2010), 4124 - 4135.</li>
				<li>Dynamic Adhesive Contact of a Membrane, Journal for Analysis and its Applications, 29 (2010), 1-20.</li>
				<li>Thermoviscoelastic problem: numerical analysis and computational experiments, Quarterly Journal Mechanics Applied Math, 63(3) (2010), 288-294.</li>
				<li>Dynamic Adhesive Contact of a Membrane, Zeitschrift fur Analysis und ihre Anwendungen, 29 (2010), 1 -20.</li>
				<li>An existence and uniqueness result for a strain-adaptive bone remodeling problem, Nonlinear Anal. Real World Appl., 12 (2011), 288-294.</li>
				<li>Calculus Theory and Applications, World Scientific, (2011), 780.</li>
        	</ul>
        </div>
      </div>

	);
}

export default homepage;