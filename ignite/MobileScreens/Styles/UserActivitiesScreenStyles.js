import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../MobileTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionText: {
    ...Fonts.base,
    color: Colors.text,
    fontSize: 12,
    lineHeight: Metrics.doubleBaseMargin + 5
  },
  mainContainer: {
    paddingHorizontal: 0,
    marginHorizontal: 0
  },
  description: {
    marginVertical: Metrics.doubleSection
  },
  sectionHeader: {
    ...Fonts.style.h5,
    color: Colors.fire
  },
  sectionHeaderContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Metrics.baseMargin,
    marginVertical: 20
  }
})
