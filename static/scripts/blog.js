var blog_titles = ["The website is here!", "test", "another test"];
var blog_descs = ["The my github pages website is finally done!", "My website v0.7", "My website v0.6"];
var blog_dates = ["2022/02/01", "2021/08/26", "2020/05/16"];
var blog_link = ["blog.html?blog=website-0.8", "blog.html?blog=website-0.7", "blog.html?blog=website-0.6"];

var list = document.getElementById('demo');

function get_blogs()
{
	for (var i = 0; i < blog_titles.length; i++)
	{
		var blog = document.createElement('div');
		var title = document.createElement('div');
		var row = document.createElement('div');
		var description = document.createElement('div');
		var date = document.createElement('div');
		var go = document.createElement('a');
		var arrow = document.createElement('i');
		
		go.href = blog_link[i];
		
		title.innerHTML = blog_titles[i];
		description.innerHTML = blog_descs[i];
		date.innerHTML = blog_dates[i];
		
		blog.classList.add("blog");
		title.classList.add("blog_title");
		description.classList.add("blog_desc");
		date.classList.add("blog_date");
		row.classList.add("blog_row");
		go.classList.add("blog_arrow");
		arrow.classList.add("fas", "fa-arrow-right");
		
		row.appendChild(description);
		row.appendChild(date);
		go.appendChild(arrow);
		row.appendChild(go);
		blog.appendChild(title);
		blog.appendChild(row);
		
		list.appendChild(blog);
	}
}

function load_blog()
{
	var fofo = document.getElementsByClassName("4040");
	var fof = document.getElementById("404");
	var read = document.getElementById("read");
	var found = 0;
	
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);

	const blog_name = urlParams.get('blog');
	
	console.log(blog_name);
	
	var blogs = ["website-0.8"];
	
	for ( var i = 0; i < blogs.length; i++ )
	{
		if (blog_name == blogs[i])
		{
			read.src = "../static/blog_content/" + blog_name + ".md";
			document.title = "CBlogs - " + blog_name.replace("-", " ");
			found = 1;
		}
		console.log(i);
		console.log(found);
	}
	
	if (found == 1)
		return;
	else{
		fof.style.display = "block";
		for (var i = 0; i < fofo.length; i++)
		{
			fofo[i].style.display = "none";
			document.title = "404 - Page Not found ";
		}
	}
	
	console.log("shit");
}