import Link from "next/link";
import { GoLocation } from 'react-icons/go'

export default function Footer() {
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16 lg:px-24 py-6 bg-gray-900 text-gray-300">
                <div>
                    <ul>
                        <li className="flex">
                            <GoLocation className="text-4xl mr-2" />Headquarters & Delivery Center 1500 Concord Ter. Suite 100, Sunrise, FL 33323
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt ipsam necessitatibus, quod adipisci inventore, ipsa, facere qui ducimus reprehenderit neque rem aspernatur. Ad alias numquam incidunt, enim perspiciatis dolorem id possimus doloremque. Aspernatur iusto deserunt, sit aliquid animi dicta ex repudiandae qui impedit unde neque consequuntur aperiam nihil quam!</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt ipsam necessitatibus, quod adipisci inventore, ipsa, facere qui ducimus reprehenderit neque rem aspernatur. Ad alias numquam incidunt, enim perspiciatis dolorem id possimus doloremque. Aspernatur iusto deserunt, sit aliquid animi dicta ex repudiandae qui impedit unde neque consequuntur aperiam nihil quam!</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt ipsam necessitatibus, quod adipisci inventore, ipsa, facere qui ducimus reprehenderit neque rem aspernatur. Ad alias numquam incidunt, enim perspiciatis dolorem id possimus doloremque. Aspernatur iusto deserunt, sit aliquid animi dicta ex repudiandae qui impedit unde neque consequuntur aperiam nihil quam!</p>
                </div>

            </div>
            <div className="bg-black text-center p-4 text-gray-500 text-xs">
                <p className="mb-2">
                    <Link href="#">
                        Terms & Conditions
                    </Link>
                    <span className="mx-2">|</span>

                    <Link href="#">
                        Terms & Conditions
                    </Link>
                    <span className="mx-2">|</span>

                    <Link href="#">
                        Terms & Conditions
                    </Link>
                    <span className="mx-2">|</span>

                    <Link href="#">
                        Terms & Conditions
                    </Link>
                    <span className="mx-2">|</span>
                    <Link href="#">
                        Terms & Conditions
                    </Link>
                </p>
                <p>Copyright © 2021-22 Tech Pertner Inc. All Rights Reserved.</p>
            </div>
        </footer>
    )
}