import {useTranslation} from "react-i18next";

const PostsPage = () => {
  const {t} = useTranslation();

  return (
    <div>
      {t('Посты')}
    </div>
  );
};

export default PostsPage;
