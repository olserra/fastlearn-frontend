import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import Button from "@/components/Button";

const now = new Date();

const styles = StyleSheet.create({
  page: {
    padding: "1cm",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "0.5cm",
  },
  content: {
    fontSize: 12,
  },
});

export const PdfExportButton = ({ content }: any) => {
  return (
    <Button className="text-white my-12">
      <PDFDownloadLink
        document={<PdfDocument content={content} />}
        fileName="generated_content.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Export to PDF")}
      </PDFDownloadLink>
    </Button>
  );
};

const PdfDocument = ({ content }: any) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.title}>
          Generated by BoostioAI on {now.toUTCString()}
        </Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </Page>
  </Document>
);
