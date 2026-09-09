/* ===================================================================
   Dr. Ratan Kumar Singh — academic homepage
   All page content below is rendered from data so that updating a
   publication list, course, or project idea only means editing the
   arrays here — the HTML and CSS never need to change.
   =================================================================== */

/* ---------- isotope notation ----------
   Turns "65Cu(n,p)65Ni" into 65 as a superscript next to Cu, the way
   it is written in a nuclear-physics paper. Matches a run of digits
   (optionally comma-separated, e.g. "107,109Ag") immediately followed
   by an element symbol (one capital letter + optional lowercase). */
function formatIso(text) {
  return text.replace(
    /(^|[^A-Za-z0-9])(\d+(?:,\d+)*)([A-Z][a-z]?)(?=[^A-Za-z]|$)/g,
    (match, pre, mass, el) => `${pre}<sup>${mass}</sup>${el}`
  );
}

/* Bold his own name wherever it appears in an author string */
function highlightAuthor(text) {
  return text.replace(
    /(R\.\s?K\.\s?Singh|Ratankumar\s?Singh|Ratan\s?Kumar\s?Singh|Ratan\s?K\.\s?Singh)/g,
    '<strong>$1</strong>'
  );
}

/* ---------- data: teaching ---------- */
const courses = [
  ["PHM2014C", "Classical Mechanics and Astrophysics"],
  ["PHY1401PT", "Elements of Modern Physics"],
  ["PHY1403ET", "Statistical Mechanics"],
  ["PHE2014C", "Radiation Physics, Biophysical Hazard and Prevention"],
  ["MDC2251C", "Medical Physics"],
  ["PHY1601EL", "Physics Laboratory Experiments"],
  ["PHY2405C20", "Advance Research Techniques"],
];

/* ---------- data: study material placeholders ---------- */
const materials = courses.map(([code, name]) => ({
  code, name,
  items: ["Lecture notes (PDF)", "Problem set", "Lab / tutorial sheet"],
}));

/* ---------- data: project ideas ---------- */
const projects = [
  {
    title: "ML surrogates for R-matrix & optical-model fits",
    body: "Pair AZURE / TALYS parameter searches with a fast machine-learned surrogate, then propagate the remaining uncertainty with the unscented Kalman filter instead of a brute-force grid.",
  },
  {
    title: "Covariance-complete (n,2n) data for reactor materials",
    body: "Extend the group's activation programme to structural-material isotopes still missing full covariance matrices in the evaluated nuclear data libraries.",
  },
  {
    title: "Bayesian reaction network for the i-process",
    body: "Feed measured proton- and neutron-capture cross sections into a Bayesian nuclear reaction network to tighten uncertainty on i-process nucleosynthesis yields.",
  },
  {
    title: "Open activation-analysis pipeline for HPGe data",
    body: "A small Python pipeline for peak fitting, efficiency calibration and decay correction, feeding directly into WINNET / TALYS input — built for reuse across future beam campaigns.",
  },
];

/* ---------- data: journal publications ---------- */
const journalPubs = [
  { authors: "R. K. Singh, N. L. Singh, Rajnikant Makwana, H. Kumawat, Mayur Mehta, Janhavi Kadia, Andhariya Shatakshi", title: "Uncertainty quantification of proton optical potential model parameters using Unscented Transform Kalman Filter techniques", venue: "Manuscript under review, Physical Review C" },
  { authors: "R. K. Singh, N. L. Singh, H. Kumawat, Rajnikant Makwana, Mayur Mehta, P. Bangotra, R. D. Chauhan, Vishal Unagar, Jaimin Achaayra, Jyoti Shankar Das", title: "Cross section measurements and uncertainty propagation via covariance analysis of proton induced reactions on 98Mo and 100Mo isotopes", venue: "Manuscript under review, Physical Review C" },
  { authors: "R. K. Singh, N. L. Singh, H. Kumawat, Rajnikant Makwana, Mayur Mehta, P. Bangotra, R. D. Chauhan, Vishal Unagar, Jaimin Achaayra, Jyoti Shankar Das", title: "Activation cross section measurements and uncertainty quantification of proton induced reactions on 94Mo and 95Mo isotopes", venue: "Radiation Physics and Chemistry, 248 (2026)" },
  { authors: "Rajnikant Makwana, Vibhuti Vashi, V. Unagar, R. K. Singh, M. H. Mehta, R. D. Chauhan, P. Bangotra, J. Acharya, H. Kumawat, B. Quintana, N. L. Singh, S. Mukherjee, S. C. Sharma, Y. Kavun, K. Chaudhari", title: "Proton induced activation cross section on 85,87Rb and 79,81Br isotopes for medical isotope production", venue: "Phys. Scr. 101, 245302 (2026)" },
  { authors: "Vandana, Shivani Sharma, N. L. Singh, Mayur Mehta, R. K. Singh, R. J. Makwana, R. D. Chauhan, Mitul Abhangi, Ratnesh Kumar, Himanshu Sharma, Sudhirsinh Vala, K. Katovsky, Pargin Bangotra", title: "Measurements of (n,p) and (n,2n) reactions cross sections on Te isotopes with covariance analysis at neutron energy 14.96±0.22 MeV", venue: "Eur. Phys. J. Plus 141:253 (2026)" },
  { authors: "Vandana, Shivani Sharma, N. L. Singh, Mayur Mehta, R. K. Singh, R. J. Makwana, R. D. Chauhan, Mitul Abhangi, Ratnesh Kumar, Himanshu Sharma, Sudhirsinh Vala, K. Katovsky, Pargin Bangotra", title: "Neutron-induced reaction cross sections on selenium isotopes at 14–15 MeV: activation measurements and covariance analysis", venue: "Chinese Physics C, doi:10.1088/1674-1137/ae7a19 (2026)" },
  { authors: "Shivani Sharma, Vandana, N. L. Singh, Mayur Mehta, R. K. Singh, R. J. Makwana, R. D. Chauhan, Mitul Abhangi, Ratnesh Kumar, Himanshu Sharma, Sudhirsinh Vala, K. Katovsky, Pargin Bangotra", title: "Experimental and theoretical analysis of neutron induced reaction cross section for 107,109Ag and 115In with covariance analysis", venue: "Eur. Phys. J. A 62:86 (2026)" },
  { authors: "Shivani Sharma, Subham Shaw, Vandana, N. L. Singh, Mayur Mehta, Mitul Abhangi, Ratnesh Kumar, Himanshu Sharma, Sudhirsinh Vala, R. K. Singh, R. J. Makwana, R. D. Chauhan, K. Katovsky, Pargin Bangotra", title: "Neutron-induced inelastic scattering cross-section measurements for natSn and 65Cu isotopes with comprehensive covariance analysis at 14.96 MeV", venue: "Radiation Physics and Chemistry 244, 113746 (2026)" },
  { authors: "Namrata Singh, Mahesh Choudhary, A. Gandhi, Mahima Upadhyay, R. K. Singh, Akash Hingu, G. Mishra, Sukanya De, L. S. Danu, Ajay Kumar, R. G. Thomas, Sauroov Sood, Sajin Prasad, B. Lalremruata, K. Katovsky, A. Kumar", title: "Study of the uncertainty quantification of the 121Sb(n,γ)122Sb reaction", venue: "Eur. Phys. J. Plus 140, 38 (2025)" },
  { authors: "Vandana, Shivani Sharma, Pargin Bangotra, N. L. Singh, Mayur Mehta, R. K. Singh, R. J. Makwana, Mitul Abhangi, Ratnesh Kumar, Himanshu Sharma, Sudhirsinh Vala, K. Katovsky", title: "Estimation of isomeric cross section and covariance analysis of 90Zr induced by deuterium-tritium fusion neutrons", venue: "J. Radioanal. Nucl. Chem. 334, 7537–7547 (2025)" },
  { authors: "Shivani Sharma, Vandana, N. L. Singh, Mayur Mehta, R. K. Singh, R. J. Makwana, Mitul Abhangi, Ratnesh Kumar, Himanshu Sharma, Sudhirsinh Vala, K. Katovsky", title: "Analysis of neutron induced reaction cross-section on 121,123Sb isotopes at neutron energy of 14.96 ± 0.03 MeV", venue: "Appl. Radiat. Isot. 220, 111758 (2025)" },
  { authors: "Vishal Unagar, Rajnikant Makwana, S. S. Barala, D. Meena, S. K. Gupta, Y. Kavun, M. Mehta, V. Vashi, R. K. Singh, R. Chauhan, S. K. Mukherjee, N. L. Singh, K. Katovsky", title: "Monte Carlo analysis of HDPE using PHITS and MCNP for neutron shielding applications", venue: "J. Radioanal. Nucl. Chem. 333, 5457–5464 (2024)" },
  { authors: "Mayur Mehta, N. L. Singh, Ratankumar Singh, R. Makwana, P. V. Subhash, Rakesh Chauhan, B. K. Soni, S. V. Suryanarayana, H. Naik, R. Palit, K. Katovsky", title: "Activation cross section for 85Rb(n,p)85mKr and 85Rb(n,2n)84mRb reactions with uncertainty propagation and covariance analysis", venue: "J. Radioanal. Nucl. Chem. 333, 5231–5241 (2024)" },
  { authors: "Rakesh Chauhan, R. K. Singh, N. L. Singh, Mayur Mehta, Rajnikant Makwana, S. V. Suryanarayana, S. Mukherjee, B. K. Nayak, H. Naik, J. Varmuza, K. Katovsky", title: "Measurement of 64Zn(n,2n) and 67Zn(n,p) reaction cross sections at neutron energies of 17.10 ± 0.82 and 14.98 ± 0.81 MeV", venue: "J. Radioanal. Nucl. Chem. (2024)" },
  { authors: "R. K. Singh, N. L. Singh, Mayur Mehta, Rakesh Chauhan, H. Kumawat, Rajnikant Makwana, S. V. Suryanarayana, B. K. Nayak, H. Naik, J. Varmuza, K. Katovsky", title: "Experimental and theoretical study of the 65Cu(n,p)65Ni reaction cross section from reaction threshold up to 25 MeV", venue: "Phys. Rev. C 107, 054607 (2023)" },
  { authors: "R. K. Singh, N. L. Singh, Mayur Mehta, Rakesh Chauhan, S. V. Suryanarayana, Rajnikant Makwana, B. K. Nayak, H. Naik, J. Varmuza, K. Katovsky", title: "Activation cross section for the (n,2n) and (n,p) reactions on 103Rh, 48Ti and 52Cr from reaction threshold up to 25 MeV energy region", venue: "Appl. Radiat. Isot. 200, 110949 (2023)" },
  { authors: "Vibhuti Vashi, Rajnikant Makwana, B. Quintana, M. H. Mehta, R. K. Singh, B. K. Soni, R. Chauhan, S. Mukherjee, M. Abhangi, S. Vala, N. L. Singh, G. B. Patel, S. V. Suryanarayana, B. K. Nayak, S. C. Sharma, T. N. Nag, Y. Kavun", title: "Systematic study of (p,n) and (p,2n) reactions on 110Cd", venue: "Radiat. Phys. Chem. 21, 110933 (2023)" },
  { authors: "R. K. Singh, N. L. Singh, R. D. Chauhan, Mayur Mehta, S. V. Suryanarayana, Rajnikant Makwana, B. K. Nayak, H. Naik, Tarak Nath Nag, J. Varmuza", title: "Systematic study of the (n,2n) reaction cross section for 121Sb and 123Sb isotopes", venue: "Chin. Phys. C 46(5), 054002 (2022)" },
  { authors: "Mayur Mehta, N. L. Singh, Ratankumar Singh, Rakesh Chauhan, Rajnikant Makwana, S. V. Suryanarayana, H. Naik, P. V. Subhash, S. Mukherjee, Jan Varmuza, Karel Katovsky", title: "Cross-section of (n,2n) reaction for niobium and strontium isotopes between 13.97 and 20.02 MeV neutron energies", venue: "Appl. Radiat. Isot. 182, 110142 (2022)" },
  { authors: "C. Joshi, H. Kumawat, R. K. Singh, N. L. Singh, D. Patel, B. K. Nayak, J. Acharya, A. Parihari, K. Rani, S. D. Sharma, G. Kaur, I. Ahmed, K. S. Golda, N. Saneesh, M. Kumar, A. Jhingan, P. Sugathan", title: "Exploring breakup coupling effect in 7Li+92,100Mo elastic scattering around Coulomb barrier energies", venue: "Eur. Phys. J. A 58:40 (2022)" },
  { authors: "Vibhuti Vashi, Rajnikant Makwana, B. Quintana, M. H. Mehta, B. K. Soni, S. Mukherjee, R. K. Singh, R. Chauhan, P. M. Prajapati, M. Abhangi, S. Vala, N. L. Singh, G. B. Patel, S. V. Suryanarayana, B. K. Nayak, S. C. Sharma, T. N. Nag, Y. Kavun", title: "Cross-section measurement of the 114Cd(p,γ)115mIn reaction for nuclear reactor and astrophysical applications", venue: "Phys. Rev. C 105, 044613 (2022)" },
  { authors: "C. Joshi, H. Kumawat, V. V. Parkar, D. Dutta, S. V. Suryanarayana, V. Jha, R. K. Singh, N. L. Singh, S. Kailas", title: "Inclusive α production for the 6Li + 51V system", venue: "Phys. Rev. C 105, 034615 (2022)" },
  { authors: "R. K. Singh, N. L. Singh, R. D. Chauhan, Mayur Mehta, S. V. Suryanarayana, Rajnikant Makwana, S. Mukherjee, B. K. Nayak, H. Naik, Tarak Nath Nag, J. Varmuza, K. Katovsky", title: "Neutron induced reaction cross section of 51V with covariance analysis", venue: "Eur. Phys. J. A 57:337 (2021)" },
  { authors: "R. K. Singh, N. L. Singh, R. D. Chauhan, Mayur Mehta, S. V. Suryanarayana, Rajnikant Makwana, S. Mukherjee, B. K. Nayak, H. Naik, J. Varmuza, K. Katovsky", title: "Cross sections for the (n,p) reaction of selenium isotopes within 10.5 to 19.81 MeV neutron energies", venue: "Eur. Phys. J. Plus 136:338 (2021)" },
  { authors: "Vibhuti Vashi, Rajnikant Makwana, S. Mukherjee, B. K. Soni, M. H. Mehta, S. Parashari, R. K. Singh, R. Chauhan, S. V. Suryanarayana, B. K. Nayak, S. C. Sharma, H. Naik, N. L. Singh, T. N. Nag", title: "Measurement of cross sections for flux monitor reactions using quasi-monoenergetic neutrons", venue: "Eur. Phys. J. Plus 136:746 (2021)" },
  { authors: "Rakesh Chauhan, R. K. Singh, N. L. Singh, Mayur Mehta, Rajnikant Makwana, S. V. Suryanarayana, S. Mukherjee, B. K. Nayak, H. Naik, J. Varmuza, K. Katovsky", title: "Study of (n,2n) reaction cross sections for 107Ag within the energy range of 9–22 MeV", venue: "Eur. Phys. J. Plus 136:532 (2021)" },
  { authors: "Mayur Mehta, N. L. Singh, R. K. Singh, Siddharth Parashari, P. V. Subhash, H. Naik, R. D. Chauhan, R. Makwana, S. V. Suryanarayana, S. Mukherjee, A. Gandhi, J. Varmuza, K. Katovsky", title: "Measurement of 90Zr(n,2n)89Zr and 90Zr(n,p)90mY reaction cross sections in the neutron energy range of 10.95 to 20.02 MeV", venue: "J. Radioanal. Nucl. Chem. 328:71–81 (2021)" },
  { authors: "H. Kumawat, C. Joshi, V. V. Parkar, V. Jha, B. J. Roy, Y. S. Sawant, P. C. Rout, E. T. Mirgule, R. K. Singh, N. L. Singh, B. K. Nayak, S. Kailas", title: "Elastic scattering for 6Li+51V and systematic study of breakup threshold anomaly", venue: "Nucl. Phys. A 1002, 121973 (2020)" },
  { authors: "Mayur Mehta, N. L. Singh, R. Makwana, P. V. Subhash, S. V. Suryanarayana, S. Parashari, Rakesh Chauhan, R. K. Singh, H. Naik, S. Mukherjee, B. Soni, S. Khirwadkar, J. Varmuza, K. Katovsky", title: "Measurement of (n,γ) reaction cross section of 186W-isotope at neutron energy of 20.02 ± 0.58 MeV", venue: "Indian J. Pure Appl. Phys. 58, 392–396 (2020)" },
  { authors: "Nidhi Shetty, Rajnikant Makwana, Mayur Mehta, S. Mukherjee, N. L. Singh, S. V. Suryanarayana, S. Parashari, R. Singh, H. Naik, S. C. Sharma, S. Ayyala, B. Soni, R. Chauhan", title: "Measurement of neutron induced 86Sr(n,2n)85Sr reaction cross sections at different neutron energies", venue: "Appl. Radiat. Isot. 154, 108866 (2019)" },
];

/* ---------- data: conference proceedings ---------- */
const confPubs = [
  { authors: "N. L. Singh, P. Bangotra, Vandana, Shivani Sharma, S. V. Suryanarayana, B. K. Nayak, H. Naik, R. K. Singh, M. Mehta, R. Makwana, Rakesh Chauhan, V. Vashi, Karel Katovsky, S. Mukherjee", title: "Experimental and theoretical study of the (n,2n) reaction cross section on 58Ni isotope", venue: "Submitted, 25th International Scientific Conference on Electric Power Engineering (EPE) 2025, Brno University of Technology, Czech Republic" },
  { authors: "R. K. Singh et al.", title: "Radiative capture cross-section for 89Y at neutron energy of 14.96 ± 0.15 MeV", venue: "2025 25th EPE, Brno University of Technology — doi:10.1109/EPE67256.2025.11127172" },
  { authors: "R. K. Singh et al.", title: "Measurement of 130Te(n,γ)131mTe reaction cross section at neutron energy of 14.96 ± 0.15 MeV", venue: "2025 25th EPE, Brno University of Technology — doi:10.1109/EPE67256.2025.11127167" },
  { authors: "R. K. Singh et al.", title: "Systematic study of the (n,p) reaction cross section on 112Cd isotope from reaction threshold to 20 MeV energies", venue: "23rd EPE 2023, Brno University of Technology — doi:10.1109/EPE58302.2023.10149229" },
  { authors: "N. L. Singh, P. Bangotra, S. V. Suryanarayana, B. K. Nayak, H. Naik, R. K. Singh, M. Mehta, R. Makwana, Rakesh Chauhan, V. Vashi, Karel Katovsky, Jan Varmuza", title: "Systematic study of the (n,p) reaction cross section on 112Cd isotope from reaction threshold to 20 MeV energies", venue: "23rd EPE 2023, Brno University of Technology" },
  { authors: "Vibhuti Vashi, R. Makwana, S. Mukherjee, B. Soni, M. H. Mehta, S. Parashari, R. K. Singh, S. V. Suryanarayana, B. K. Nayak, S. C. Sharma, H. Naik, Tarak Nath", title: "Measurement of reaction cross-section for 197Au(n,2n)196Au reaction", venue: "Proc. DAE Symp. Nucl. Phys. 64, B31-381 (2019)" },
  { authors: "Siddharth Parashari, S. Mukherjee, H. Naik, S. V. Suryanarayana, Rajnikant Makwana, Mayur Mehta, Ratan Kumar, N. L. Singh, Sai Akhil Ayyala", title: "Measurement of 100Mo(n,2n)99Mo reaction cross sections using 10–20 MeV quasi-monoenergetic neutrons", venue: "19th EPE 2018" },
  { authors: "Siddharth Parashari, S. Mukherjee, S. V. Suryanarayana, R. Makwana, B. K. Nayak, Ratan K. Singh, S. C. Sharma, M. Mehta, N. L. Singh, H. Naik", title: "Production cross-section of the 99mTc medical isotope by using the natMo(p,2n) reaction", venue: "Proc. DAE Symp. Nucl. Phys. 63, B42-464 (2018)" },
  { authors: "Bhargav K. Soni, Siddharth Parashari, S. Mukherjee, S. V. Suryanarayana, R. Makwana, B. K. Nayak, Ratan K. Singh, S. C. Sharma, M. Mehta, N. L. Singh, H. Naik", title: "Measurement of the 115In(n,2n)114mIn reaction cross-section using quasi-monoenergetic neutrons", venue: "Proc. DAE Symp. Nucl. Phys. 63, B43-466 (2018)" },
  { authors: "Nidhi Shetty, Rajnikant Makwana, Mayur Mehta, N. L. Singh, S. Mukherjee, S. V. Suryanarayana, Siddharth Parashari, Ratan Kumar, Sai Akhil Ayyala, Chandni Menpara", title: "Measurement of neutron induced reaction cross-sections for 86Sr at different neutron energies", venue: "Proc. DAE Symp. Nucl. Phys. 63, B108-596 (2018)" },
  { authors: "Rakesh Chauhan, Ratan Kumar Singh, Rajnikant Makwana, N. L. Singh, S. Mukherjee, H. Naik, Mayur Mehta, B. K. Soni, S. V. Suryanarayana", title: "Measurements of cross section of 160Gd(n,2n)159Gd reaction at energies of 10.72, 14.72 and 18.72 MeV", venue: "Proc. DAE Symp. Nucl. Phys. 63, B138-656 (2018)" },
  { authors: "Golda K. S., H Singh, C. Yadav, Mohit Kumar, N. Saneesh, A. Jhingan, Kavita Chouhan, R. Kumar, R. R. Dubey, Abhishek Yadav, Neeraj Kumar, A. Banerjee, Anjali Rani, Kavita Rani, J. R. Acharya, Ratan, S. Noor, S. K. Duggi, P. Sugathan", title: "Entrance channel dependence of fusion-fission dynamics in mass ~200 region", venue: "Proc. DAE Symp. Nucl. Phys. 63, B150-680 (2018)" },
  { authors: "Mayur Mehta, N. L. Singh, P. V. Subhash, Rajnikant Makwana, Rakesh Chauhan, Ratankumar Singh, H. Naik, S. Mukherjee, S. V. Suryanarayana, Vibha Vansola, Y. Santhi Sheela, Mitul Abhangi, Sudhirsingh Vala, Naveen Agrawal, Nidhi Shetty, R. Acharya", title: "Measurement of 93Nb(n,2n)92Nb cross-section at different neutron energies", venue: "Proc. DAE Symp. Nucl. Phys. 63, B163-706 (2018)" },
  { authors: "C. Joshi, H. Kumawat, V. V. Parkar, V. Jha, B. J. Roy, Y. S. Sawant, P. C. Rout, E. T. Mirgule, R. Tripathi, R. K. Singh, N. L. Singh, B. K. Nayak", title: "Reaction dynamics of weakly bound stable projectile for system 6Li+51V", venue: "Proc. DAE Symp. Nucl. Phys. 63, B169-718 (2018)" },
  { authors: "Siddharth Parashari, S. Mukherjee, H. Naik, S. V. Suryanarayana, Rajnikant Makwana, Mayur Mehta, Ratan Kumar, N. L. Singh, Sai Akhil Ayyala", title: "Measurement of 100Mo(n,2n)99Mo reaction cross-sections", venue: "Proc. DAE Symp. Nucl. Phys. 62, B20-400 (2017)" },
  { authors: "Chhavi Joshi, Ratan K. Singh, Siddharth Parashari, Mayur Mehta, Rakesh Chauhan, Rajnikant Makwana, S. K. Mukherjee, N. L. Singh", title: "Measurement of the cross-section 107Ag(n,2n)106mAg reaction on neutron energy 13 MeV and 22 MeV", venue: "Proc. DAE Symp. Nucl. Phys. 62, B125-610 (2017)" },
];

/* ---------- data: posters ---------- */
const posters = [
  { title: "Cross-section measurement of the 103Rh(n,2n)102Rh reaction at 22 MeV energy", venue: "62nd DAE-BRNS Symposium on Nuclear Physics, Thapar Institute of Engineering & Technology, Patiala" },
  { title: "Measurement of 78Se(n,p)78As reaction cross-sections at different neutron energies", venue: "DAE International Symposium on Nuclear Physics, BARC, Mumbai" },
  { title: "Neutron nuclear data of (n,2n) reaction for Sb isotopes", venue: "Department of Physics, University of Lucknow" },
  { title: "Nuclear fusion/fission reactors for future", venue: "Department of Physics, Faculty of Science, MSU Baroda" },
  { title: "Renewable energy", venue: "Department of Physics, Faculty of Science, MSU Baroda" },
  { title: "High energy physics (standard model)", venue: "Department of Physics, Faculty of Science, MSU Baroda" },
];

/* ---------- data: schools, conferences & workshops ---------- */
const conferences = [
  ["Aug 2026", "One-Week FDP on Deep Learning and Generative AI", "E&ICT Academy, NIT Patna, with IIT Kanpur & IIT Roorkee"],
  ["Jun 2026", "FDP on Computational Mathematics using Python", "Sphoorthy Engineering College, Hyderabad"],
  ["Feb 2026", "FDP on AI Teaching, Learning and Research Methodologies", "Aurora's Degree and PG College, Andhra Pradesh"],
  ["Jan 2026", "FDP on Essential Mathematical Tools for Machine Learning (EMTML-2026)", "Vasavi College of Engineering, Hyderabad"],
  ["Dec 2025", "MMTTC Refresher Course: Physics Beyond Classroom", "UGC-MMTTC, MSU Baroda"],
  ["Sep 2025", "Workshop on Beneficial Effects of Radiation Technology & Indian Nuclear Energy Programme", "IARP, Mumbai"],
  ["Aug 2025", "Introduction to Astronomy Research (8-week online school)", "Institute for Astronomy, University of Hawaii, USA"],
  ["Aug 2025", "2025 MTV Nuclear Engineering Summer School (5-week online school)", "Michigan Engineering Consortium (MTV), USA"],
  ["Nov 2024", "Faculty Development Programme", "MSU Baroda"],
  ["Feb 2024", "National Conference: Scientific Innovations Towards Developed India", "MSU Baroda"],
  ["Jul 2021", "PHITS advanced course tutorial", "Japan Atomic Energy Agency, Nuclear Science and Engineering"],
  ["Nov 2019", "DAE-BRNS Workshop on Compilation of Experimental Nuclear Reaction Data", "MSU Baroda"],
  ["Apr 2018", "Ph.D. Teaching Programme, Module 624B: Nuclear Models-II", "Inter University Accelerator Centre, New Delhi"],
  ["Dec 2018", "DAE International Symposium on Nuclear Physics", "BARC, Mumbai"],
  ["Oct 2017", "International Conference on High Energy Radiation and Applications", "MSU Baroda"],
  ["Nov 2017", "IUAC School on Nuclear Reactions", "Inter University Accelerator Centre, New Delhi"],
  ["Dec 2017", "4th DAE-BRNS Theme Meeting on Covariance Matrices in Nuclear Data", "Manipal University Karnataka"],
  ["Dec 2017", "62nd DAE-BRNS Symposium on Nuclear Physics", "Thapar Institute of Engineering & Technology, Patiala"],
  ["Feb 2017", "Science Conclave 2017", "MSU Baroda"],
  ["Jun 2016", "National Seminar: Modern Education System — Multidisciplinary Perspective", "MSU Baroda"],
  ["Nov 2016", "Special Lectures on Nuclear Reactions Close to Coulomb Barrier (Prof. H.-J. Wollersheim, GSI/FAIR)", "Inter University Accelerator Centre, New Delhi"],
  ["Oct 2015", "DAE-BRNS Workshop on Monte Carlo Nucleon Transport Code (MONC)", "HBNI, Mumbai"],
  ["Dec 2014", "Indo-Czech Workshop on Monte Carlo Simulation and Applications", "MSU Baroda"],
  ["Jan 2014", "Innovations in Science and Technology", "MSU Baroda"],
];

/* ---------- render helpers ---------- */
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderCourses() {
  const body = document.getElementById("courseTableBody");
  courses.forEach(([code, name]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${code}</td><td>${name}</td>`;
    body.appendChild(tr);
  });
}

function renderMaterials() {
  const grid = document.getElementById("materialGrid");
  materials.forEach((m) => {
    const card = el("div", "material-card");
    const items = m.items.map(i => `<li>${i} <span class="soon">— coming soon</span></li>`).join("");
    card.innerHTML = `<p class="material-code">${m.code}</p><h4>${m.name}</h4><ul>${items}</ul>`;
    grid.appendChild(card);
  });
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  projects.forEach((p) => {
    const card = el("div", "project-card");
    card.innerHTML = `<h4>${p.title}</h4><p>${p.body}</p>`;
    grid.appendChild(card);
  });
}

function renderPubList(containerId, list, withAuthors = true) {
  const container = document.getElementById(containerId);
  list.forEach((p) => {
    const li = document.createElement("li");
    li.className = "pub-item";
    const authorsHtml = withAuthors ? `<p class="pub-authors">${highlightAuthor(p.authors)}</p>` : "";
    li.innerHTML = `
      ${authorsHtml}
      <p class="pub-title">${formatIso(p.title)}</p>
      <p class="pub-venue">${p.venue}</p>
    `;
    container.appendChild(li);
  });
}

function renderPosters() {
  const container = document.getElementById("pub-poster");
  posters.forEach((p) => {
    const li = document.createElement("li");
    li.className = "pub-item";
    li.innerHTML = `<p class="pub-title">${formatIso(p.title)}</p><p class="pub-venue">${p.venue}</p>`;
    container.appendChild(li);
  });
}

function renderConferences() {
  const container = document.getElementById("confList");
  conferences.forEach(([date, title, place]) => {
    const row = el("div", "conf-row");
    row.innerHTML = `<span class="conf-date">${date}</span><span class="conf-title">${title}<span class="conf-place">${place}</span></span>`;
    container.appendChild(row);
  });
}

/* ---------- pub tabs ---------- */
function setupPubTabs() {
  const tabs = document.querySelectorAll(".pub-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      document.getElementById("pub-journal").hidden = tab.dataset.target !== "pub-journal";
      document.getElementById("pub-conf").hidden = tab.dataset.target !== "pub-conf";
    });
  });
}

/* ---------- horizontal top tabs (page sections) ---------- */
function setupTopTabs() {
  const tabs = document.querySelectorAll(".top-tab");
  const panels = document.querySelectorAll(".page-section");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      document.getElementById(tab.dataset.target).classList.add("active");
      document.querySelector(".top-tabs").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* Let links elsewhere on the page (e.g. "reach out on email") jump to a
   tab and open the right panel, not just scroll to a hidden section. */
function setupCrossLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute("href").slice(1);
    const tab = document.querySelector(`.top-tab[data-target="${targetId}"]`);
    if (tab) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        tab.click();
      });
    }
  });
}

/* ---------- mobile nav toggle ---------- */
function setupNavToggle() {
  const btn = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");
  btn.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  sidebar.querySelectorAll(".quicklinks a").forEach((a) => {
    a.addEventListener("click", () => {
      sidebar.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  renderMaterials();
  renderProjects();
  renderPubList("pub-journal", journalPubs, true);
  renderPubList("pub-conf", confPubs, true);
  renderPosters();
  renderConferences();
  setupPubTabs();
  setupTopTabs();
  setupCrossLinks();
  setupNavToggle();
});
