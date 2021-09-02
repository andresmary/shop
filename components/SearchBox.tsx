import { useState } from 'react';
import styles from '../styles/SearchBox.module.scss';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const router = useRouter();
  
  const search = (e:any) => {
    e.preventDefault();
    router.push(`/items?search=${searchTerm}`)
  };

  return (
    <header>
      <div className="container-xxl d-flex justify-content-center align-items-center">
        <div className={`col-2 col-lg-1 py-1 ${styles.container}`}>
          <Link href="/">
            <a><Image src="/images/Logo_ML@2x.png" alt='' width={53} height={36} /></a>
          </Link>
        </div>
        <div className="col-10 col-lg-9">
          <form onSubmit={search} className={`w-100 d-flex ${styles.search}`}>
            <input
              type="text"
              placeholder="Nunca dejes de buscar"
              value={searchTerm}
              onChange={handleChange}
              className="flex-grow-1"
            />
            <button type="submit" className={styles.container}>
              <Image src="/images/ic_Search.png" alt='' width={18} height={18} />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default SearchBox;
