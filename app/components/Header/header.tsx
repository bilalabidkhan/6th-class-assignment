import { headers } from "next/headers";
import Link from "next/link";
import cssStyle from "./header.module.css";
console.log(cssStyle,"CSS");

const header = ()=> {
    return (
      <header className={cssStyle.green}>
        <div className="container mx-auto flex justify-between item-center">
          <h1>BILAL KHAN</h1> 
          <nav>
            <ul className="flex space-x-6">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="service">Service</Link>
                </li>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default header