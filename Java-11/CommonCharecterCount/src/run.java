import java.util.HashMap;
import java.util.Map;

public class run {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

String s1 = "aabcc";
String s2 = "adcaa";

	System.out.println(solution(s1,s2));
	}
	
	static int solution(String s1, String s2) {
		int count = 0;
	    int length = s1.length() > s2.length() ? s1.length() : s2.length();
	    Map<Character, Integer> hashMap1 = new HashMap<Character, Integer>();
	    Map<Character, Integer> hashMap2 = new HashMap<Character, Integer>();
	    
	    for(int i = 0; i < length; i++) {
	    	
	        char letter1 = '\0';
	        if(i < s1.length()) {
	        	letter1 = s1.charAt(i);
	        	storeLetter(hashMap1,letter1);
	        	
	        }
	        
	        char letter2 = '\0';
	        if(i < s2.length()) {
	        	
	        	letter2 = s2.charAt(i);
	        	storeLetter(hashMap2,letter2);
	        }
	        
	    }
	    
	    for (Character key : hashMap1.keySet()) {
	        if(hashMap2.get(key) == null) continue;
	        
	        int value1 = hashMap1.get(key);
	        int value2 = hashMap2.get(key);
	        count += value1 > value2 ? value2 : value1; 
	    }
	 
	    return count;
	}
	    public static void storeLetter(Map<Character, Integer> map,char letter) {
	        if(map.get(letter) == null) {
	            map.put(letter, 1);
	        } else {
	            int letterCount = (int) map.get(letter) + 1;
	            map.put(letter,letterCount);
	        }
	    }

}
