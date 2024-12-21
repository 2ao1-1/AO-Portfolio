// document.addEventListener("DOMContentLoaded", () => {
//   // إنشاء العناصر
//   const section = document.createElement("section");
//   section.className = "h-[1000vh] bg-neutral-50 text-neutral-950";

//   const div = document.createElement("div");
//   div.className = "sticky top-0 flex h-screen items-center overflow-hidden";

//   const p = document.createElement("p");
//   p.className =
//     "origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]";
//   p.textContent =
//     "Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On!' has solved and always will solve the problems of the human race.";

//   div.appendChild(p);
//   section.appendChild(div);
//   document.body.appendChild(section);

//   // إعداد الحركة
//   const targetRef = section;
//   const spring = (value, stiffness = 400, damping = 50) => {
//     let current = value;
//     let velocity = 0;

//     return (to) => {
//       const delta = to - current;
//       const springForce = delta * stiffness;
//       const dampingForce = velocity * -damping;
//       const acceleration = springForce + dampingForce;

//       velocity += acceleration * 0.016;
//       current += velocity * 0.016;

//       return current;
//     };
//   };

//   // الحركات
//   const skewXSpring = spring(0);
//   const xSpring = spring(0);

//   const handleScroll = () => {
//     const rect = targetRef.getBoundingClientRect();
//     const scrollYProgress = Math.max(
//       0,
//       Math.min(1, 1 - rect.top / window.innerHeight)
//     );

//     const scrollVelocity = (scrollYProgress - (p.scrollProgress || 0)) * 100;
//     p.scrollProgress = scrollYProgress;

//     // قيم التحريك
//     const targetSkewX = scrollVelocity / 5; // تقليد السرعة (-45deg, 45deg)
//     const targetX = scrollYProgress * -4000; // (-4000px)

//     const skewX = skewXSpring(targetSkewX);
//     const x = xSpring(targetX);

//     p.style.transform = `skewX(${skewX}deg) translateX(${x}px)`;
//   };

//   // ربط الحدث
//   window.addEventListener("scroll", handleScroll);
// });

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects");

  // بيانات المشاريع
  const projects = [
    { title: "Project 1", description: "This is project 1." },
    { title: "Project 2", description: "This is project 2." },
    { title: "Project 3", description: "This is project 3." },
    { title: "Project 4", description: "This is project 4." },
    { title: "Project 5", description: "This is project 5." },
  ];

  // إنشاء الكروت ديناميكيًا
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className =
      "w-72 h-48 bg-white flex text-xl font-semibold text-gray-800 relative overflow-hidden";
    card.innerHTML = `
    <div class="w-full h-full flex items-center justify-center">
        <img src="https://via.placeholder.com/150" alt="${project.title}" class="w-full h-full ">    
    </div>
    <div class="p-4 absolute bg-white/50 bg-opacity-90 text-black tracking-wide bottom-0 w-full">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    </div>
      `;
    projectsContainer.appendChild(card);
  });
});
