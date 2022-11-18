import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-16 lg:px-24 py-6 bg-black text-gray-500">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt ipsam necessitatibus, quod adipisci inventore, ipsa, facere qui ducimus reprehenderit neque rem aspernatur. Ad alias numquam incidunt, enim perspiciatis dolorem id possimus doloremque. Aspernatur iusto deserunt, sit aliquid animi dicta ex repudiandae qui impedit unde neque consequuntur aperiam nihil quam!</p>
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
            <div className="bg-yellow-400 text-center p-4 text-gray-700 text-xs">
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
                <p>Copyright © 2000-2022 Tech Pertner Inc. All Rights Reserved.</p>
            </div>
        </footer>
    )
}