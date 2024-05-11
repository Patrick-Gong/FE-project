import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './Error';

// config를 안에 그냥 '{}'으로 코딩하면
// 무한루프 발생
// useHttp 안에 상태 함수가 있기 때문에
// 아이템이 fetch되기 전에
// useHttp 재실행 -> Meals 재실행 발생
// 그 과정에서 빈 객체를 useHttp의 파라미터로 전달하면
// 자바스크립트가 새로운 객체로 판단하여 useEffect가 무한정으로 실행된다

// 컴포넌트 밖에서 정의함으로써
// 렌더링 사이에 정적인 값으로 만들 수 있었다
const requestConfig = {};

export default function MealItems() {
  const {
    data: fetchedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  // http 전송은 렌더링 이후에 진행됨
  // 그 결과 Meals 컴포넌트가 렌더링될 때
  // loadedMeals가 undefined로 설정되어 에러 발생

  return (
    <ul id="meals">
      {fetchedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
