export default function FooterTopCategory({ category }) {
    return (
        <ul className="list-unstyled text-black-50">
            <li className="fw-bold">{category.title}</li>
            {category.subCategories.map(subCategory =>
                <li key={subCategory}>
                    {subCategory}
                </li>
            )}
        </ul>
    )
}