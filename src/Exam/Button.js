import PropTypes from 'prop-types'; // PropTypes는 부모로부터 전달받은 prop의 데이터 type을 검사

// 구조분할 할당 props, 배열, 객체 둘 다 가능
export default function Button({ color, text, onClick }) {
    
    return (
        <button className={color} onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

Button.defaultProps = {
    text: 'btn'
}