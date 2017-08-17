import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  feedItemContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreActionIcon: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'rgba(0.56, 0.56, 0.56, 1)',
  },
  feedAuthorAvatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  dataContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  authorNameText: {
    fontWeight: 'bold',
  },
  datedText: {
    color: '#696969',
  },
  feedContentContainer: {
    paddingTop: 10,
    paddingBottom: 6,
  },
  feedContentText: {
    color: 'rgba(0.75, 0.73, 0.75, 1.0)',
    fontSize: 15,
    lineHeight: 22,
  },
  highlightedText: {
    fontWeight: 'bold',
  },
  otherAvatarContainer: {
    paddingTop: 6,
    flexDirection: 'row',
  },
  othersAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -5,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  othersText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#696969',
  },
});
