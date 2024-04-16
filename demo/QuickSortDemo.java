import java.util.Arrays;

public class QuickSortDemo {
    public static void main(String[] args) {
        int[] arr = { 6, 1, 2, 7, 9, 3, 4, 5, 10, 8 };
        QuickSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }

    public static void QuickSort(int[] arr, int left, int right) {
        int i, j, temp;
        if (left > right) {
            return;
        }
        i = left;
        j = right;
        temp = arr[i];
        while (i != j)// 或者是i < j,不能是i <= j
        {
            System.out.println(i);
            /*
             * //特别注意顺序，先从右往左，再从左往右
             * while(arr[j] >= temp && i < j)
             * j--;
             * while(arr[i] <= temp && i < j)
             * i++;
             */
            // 顺序错误，结果错误

            while (arr[i] <= temp && i < j)
                i++;
            while (arr[j] >= temp && i < j)
                j--;

            if (i < j)// 探测未结束，交换arr[i]和arr[j]
            {
                int t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
        // 探测结束，交换arr[i]和temp
        arr[left] = arr[i];
        arr[i] = temp;
        QuickSort(arr, left, i - 1);
        QuickSort(arr, i + 1, right);
    }
}
// [1, 2, 5, 3, 4, 9, 6, 10, 7, 8]