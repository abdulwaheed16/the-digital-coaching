import React from "react";
import styles from "../../styles/fee-structure.module.css";
import Link from "next/link";

const FeeStructure = () => {
  return (
    <>
      <div className={`${styles.cards} flex flex-col md:flex-row`}>
        <Link
          href={"/fee/domestic"}
          className={`${styles.card} ${styles.domestic} h-16 w-full border-b-4 border-dark bg-primary uppercase dark:border-b-4 dark:border-b-primary dark:bg-gray-dark md:h-20`}
        >
          <p className={`${styles.tip}`}>Domestic Student</p>
        </Link>

        <Link
          href={"/fee/international"}
          className={`${styles.card} ${styles.international} h-16 w-full border-b-4 border-dark bg-primary uppercase dark:border-b-4 dark:border-b-primary dark:bg-gray-dark md:h-20`}
        >
          <p className={`${styles.tip}`}>International Student</p>
        </Link>
      </div>
    </>
  );
};

export default FeeStructure;
