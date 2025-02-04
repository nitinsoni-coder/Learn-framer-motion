import React from "react";
import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();

  console.log("--scrollYProgress--", scrollYProgress);
  return (
    <div>
      {/* <motion.div
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, 0, -360, 0],
        }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
        className="box"
      ></motion.div> */}
      {/* <motion.div
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{ left: 0, top: 0, right: "100%", bottom: "100%" }}
        className="box"
      ></motion.div> */}

      <motion.div
        className="progress"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <h1>Learning Framer-motion</h1>

      <div className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam
        tempora corporis recusandae dolorem praesentium nobis laudantium rem
        minus obcaecati dignissimos dolores in, voluptates aliquam. Perferendis,
        quia voluptatibus! Sed natus molestiae dolore eius saepe architecto
        fugiat! Dolor amet praesentium ad eum itaque nobis odio facilis iusto
        animi molestiae laudantium suscipit dolore, natus a aliquam ab
        consequatur cum ea enim soluta velit! Accusamus nihil beatae enim ex
        sequi labore corporis accusantium fugiat voluptatum quisquam. Veritatis
        voluptatum odit qui, eius nihil cum sapiente asperiores itaque voluptas.
        Mollitia sequi minus officia quo quas vitae expedita temporibus minima
        quos at, esse voluptas dignissimos tempora ut aperiam eligendi, corporis
        illum magnam perferendis et dolor architecto iste! Totam nulla, fuga
        esse temporibus, quo quae consequuntur inventore, facilis consequatur
        pariatur ullam. Sapiente ipsa maiores harum dolorum itaque animi aliquid
        molestias quasi est explicabo, mollitia omnis repudiandae tenetur labore
        aut, magni, neque dolores! Nam corrupti quis maiores tempore animi
        soluta. Aspernatur, mollitia itaque repellendus explicabo excepturi
        autem officia. Labore nesciunt magnam laborum facilis enim vel quas
        incidunt ab quod? Ea, ex accusamus alias quaerat aspernatur sunt
        incidunt, reprehenderit unde nam provident mollitia consequuntur aut
        corporis enim, rem accusantium. Quae ex dolor hic, ullam vel corporis
        error. Adipisci fugiat quis perspiciatis illo error culpa quam
        voluptates, consectetur enim fugit cumque accusantium eum eos voluptatem
        dolore asperiores dolorem nemo tenetur quisquam! Dolore non eum delectus
        officia magni eaque amet sapiente cum veritatis vitae, facere numquam
        consequatur quisquam blanditiis provident et, neque quia animi
        consectetur cumque officiis fugiat qui odit deleniti. Doloribus, dolores
        voluptatibus. Incidunt atque voluptatem minima vero non blanditiis
        accusamus eius autem unde sit vel earum enim natus, consequuntur fuga,
        esse dolorem iste aspernatur ipsum consequatur tenetur cupiditate iure
        quod. Facilis ratione labore adipisci consequuntur sapiente. Quae
        corrupti nostrum minus neque ex, temporibus provident odio, quis, iste
        quod repellat?
        <br />
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus rem
        quisquam deleniti aliquid id, iste qui. In dicta minus nihil ea vitae
        vero quia ab neque reiciendis nemo aperiam maiores at vel impedit
        voluptatibus earum velit, asperiores provident. Rem, iste illum repellat
        dicta explicabo ullam fugiat modi nostrum laboriosam voluptatem
        provident voluptates ad nam consequuntur cupiditate sed nisi corrupti.
        Consequatur tenetur hic ea cupiditate perferendis voluptatem pariatur,
        unde iste, iure deleniti quibusdam voluptate aut explicabo. Officiis
        atque quo ipsam adipisci non distinctio voluptatum doloremque molestias
        doloribus dolores, tempora animi velit laborum mollitia voluptates
        repellat quaerat delectus, sapiente expedita necessitatibus, nemo
        temporibus hic! Iusto libero, ratione repellat quod dolorem perspiciatis
        quisquam natus praesentium quasi magni ducimus ab tenetur doloribus
        reprehenderit at repellendus perferendis similique corrupti. Commodi
        eius neque exercitationem ipsa voluptate odit quas libero inventore
        reiciendis quos excepturi unde ut, qui in nisi dolores repudiandae
        corrupti itaque similique voluptatem nihil fugit dolor accusantium?
        Eaque, obcaecati. Aliquid hic nesciunt voluptatem nisi temporibus,
        facere illo earum quia unde, maxime doloribus obcaecati officia non,
        voluptates velit ullam consectetur quibusdam. Repellat, non. Fugiat
        aliquid quia voluptas quibusdam sunt ad amet dicta. Nesciunt velit,
        repudiandae veniam necessitatibus aperiam mollitia ipsa sint tempore?
        Sapiente illo veritatis pariatur.
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quae
        reprehenderit molestiae quidem eligendi facilis, dolorum obcaecati modi
        delectus neque aut fugiat earum soluta quam quis voluptate laborum?
        Provident perferendis maiores fuga sequi deserunt molestias similique
        sunt aspernatur quidem ut placeat perspiciatis, ex nulla neque adipisci!
        Eos inventore assumenda perferendis nobis provident quia. Quos ullam
        magni similique, aliquam explicabo veniam error fuga necessitatibus iste
        aperiam suscipit quaerat voluptatem asperiores! Ipsam recusandae vitae
        sunt sapiente debitis a! Ab, quod autem accusamus cum dolor sequi
        commodi eum rerum atque sint quaerat voluptates obcaecati, unde quia
        libero rem ducimus ex tempora doloribus. Accusantium est non, aut beatae
        corporis quam, rerum dolor, delectus cum ullam iure saepe maiores fugit
        assumenda eveniet officiis reprehenderit! Praesentium rerum aspernatur
        inventore explicabo eius ratione quae iste voluptas consequatur quam,
        alias, eum recusandae dolorum sunt et molestiae nemo debitis, voluptatem
        ex reiciendis provident velit illo. Adipisci, id distinctio ipsa, earum
        atque animi assumenda totam dolor est soluta libero! Veniam mollitia
        ipsa eligendi, ullam asperiores vero, similique inventore eos quibusdam
        et voluptatibus id ut placeat autem quod explicabo aut omnis sequi non
        quam tempore est sunt? Doloremque odio assumenda inventore eius ipsam
        magni illum quo eligendi rem, atque iste similique.
      </div>
    </div>
  );
};

export default App;
