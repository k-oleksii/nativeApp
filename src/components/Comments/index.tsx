import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EnumColors } from 'app/types';
import { useApi } from 'app/hooks';

interface IComment {
  name: string;
  email: string;
  body: string;
}

export const Comments = ({ id }: { id: string | number }) => {
  const { isLoading, error, data } = useApi(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`);

  const renderComments = (comments: IComment[]) => {
    return comments.map((comment: IComment) => (
      <View key={comment.email} style={styles.comment}>
        <View style={styles.commentBox}>
          <Text style={styles.commentName}>Name:</Text>
          <Text style={styles.commentText}>{comment.name}</Text>
        </View>
        <View style={styles.commentBox}>
          <Text style={styles.commentName}>Email:</Text>
          <Text style={styles.commentText}>{comment.email}</Text>
        </View>
        <Text style={styles.commentText}>{comment.body}</Text>
      </View>
    ));
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : data ? (
        <View style={styles.commentContainer}>
          <Text style={styles.commentContainerTitle}>Comments:</Text>
          {renderComments(data)}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  commentContainerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: EnumColors.black,
  },
  comment: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(79, 86, 99, 0.4)',
    borderRadius: 8,
    padding: 14,
    gap: 4,
  },
  commentBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
  commentName: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: EnumColors.black,
  },
  commentText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: EnumColors.gray,
  },
});
