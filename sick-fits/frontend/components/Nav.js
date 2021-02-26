import Link from "next/link";

export default function Nav() {
	return (
		<div>
			<Link href='/products'>products</Link>
			<Link href='/sell'>Sell</Link>
			<Link href='/orders'>Orders</Link>
			<Link href='/account'>Account</Link>
		</div>
	);
}
