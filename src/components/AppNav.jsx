import React from "react";

const AppNav = () => (
	<div>
		<header>
			<div class="row">

				<div class="top-bar">
					<a class="menu-toggle" href="#"><span>Menu</span></a>

					<div class="logo">
						<a href="index.html">Lennox Mwabonje</a>
					</div>

					<nav id="main-nav-wrap">
						<ul class="main-navigation">
							<li class="current"><a class="smoothscroll" href="#intro" title="">Home</a></li>
							<li><a class="smoothscroll" href="#about" title="">About</a></li>
						</ul>
					</nav>
				</div>

			</div>
		</header>
	</div>
)

export default AppNav;