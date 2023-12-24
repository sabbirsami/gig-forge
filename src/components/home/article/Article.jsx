import a01 from "../../../assets/a1.jpg";
import a02 from "../../../assets/a04.webp";
import a03 from "../../../assets/a05.webp";

const Article = () => {
    const articles = [
        {
            title: "The Future of Remote Work",
            image: a01,
            date: "2023-01-15",
            auth_name: "John Doe",
            auth_img: "john_doe.jpg",
            tag: "Remote Work",
            comments: 42,
        },
        {
            title: "Navigating Career Transitions",
            image: a02,
            date: "2023-02-10",
            auth_name: "Jane Smith",
            auth_img: "jane_smith.jpg",
            tag: "Career Advice",
            comments: 28,
        },
        {
            title: "Tech Trends Shaping the Job Market",
            image: a03,
            date: "2023-03-05",
            auth_name: "Alex Johnson",
            auth_img: "alex_johnson.jpg",
            tag: "Technology",
            comments: 35,
        },
    ];

    return (
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-semibold">Latest Articles</h2>
        </div>
    );
};

export default Article;
