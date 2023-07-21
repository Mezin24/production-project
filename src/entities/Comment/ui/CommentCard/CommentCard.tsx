import { Comment } from 'entities/Comment';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
   className?: string;
   comment?: Comment;
   isLoading?: boolean

}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={20} width={150} />
        </div>
        <Skeleton className={cls.text} height={40} width="100%" />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <AppLink to={`${RoutePaths.profile}${comment?.user.id}`} className={cls.header}>
        {comment?.user.avatar
        && <Avatar size={30} src={comment?.user.avatar} alt={comment.user.username} />}
        <Text title={comment?.user.username} />
      </AppLink>
      <div className={cls.text}>{comment?.text}</div>
    </div>
  );
};
